import React, { useState } from 'react';
import { Formik }          from 'formik';
import { Link }            from 'react-router-dom';
import S                   from './styles';
import Stopwatch           from '../../lib/Stopwatch';

const Room = ({ data }) => {

  const [currentStep, setCurrentStep] = useState(0);
  const steps = data.steps;
  const step = steps[currentStep];

  const next = () => {
    setCurrentStep(currentStep + 1);
  };

  const confirmAnswer = (answer, resetForm) => {

    if (answer === step.answer) {
      next();
      resetForm();
    } else {
      alert('틀렸습니다. 다시 풀어보세요');
      resetForm();
    }
  }

  if (!data) return null;


  return (
    <S.Wrapper coverUrl={step.image}>
      <S.Count><Stopwatch time={data.limit * 60}/></S.Count>
      <S.Item>
        <S.Question>
          <img src={step.question}/>
        </S.Question>
        <S.TextBox>
          <S.Text>{step.text}</S.Text>
          <S.NextActions>
            {
              !!step.input.length &&
                <Formik
                  initialValues={{ answer: '' }}
                  onSubmit={(values, { resetForm, ...actions }) => {

                    setTimeout(() => {
                      confirmAnswer(values.answer, resetForm);
                      actions.setSubmitting(false);
                    }, 1000);
                  }}
                >
                  { ({resetForm, ...props}) =>(
                    <S.Form onSubmit={props.handleSubmit}>
                      { step.input.map((inputInfo, i) => (
                        <input
                          key      = {i}
                          type     = {inputInfo.type}
                          onChange = {props.handleChange}
                          onBlur   = {props.handleBlur}
                          value    = {props.values.answer}
                          name     = "answer"
                        />
                      ))}
                      {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                      <button type="submit">Submit</button>
                    </S.Form>
                  )
                }
                </Formik>
            }
            {
              !step.input.length &&
              <S.Button onClick={next}>다음</S.Button>
            }
          </S.NextActions>
        </S.TextBox>

      </S.Item>

    </S.Wrapper>
  );
};

export default Room;