import { useDispatch } from "react-redux";
import { Field, InjectedFormProps, reduxForm, WrappedFieldProps } from "redux-form";
import { Button, Form, Label } from "semantic-ui-react";
import { createStream } from "../store";

interface P {
  label: string;
}
export interface StreamFormData extends FormData {
  title: string;
  description: string;
}

export const StreamCreate = (props: InjectedFormProps<StreamFormData>) => {
  const dispatch = useDispatch();

  const renderInput = (formProps: WrappedFieldProps & P) => {
    return (
      <div>
        <Label>{formProps.label}</Label>
        <Form.Input {...formProps.input} />
      </div>
    );
  };
  const onSubmit = (formValues: StreamFormData) => {
    dispatch(createStream(formValues));
  };

  return (
    <Form onSubmit={props.handleSubmit(onSubmit)}>
      <Field name="title" component={renderInput} label="Enter Title" />
      <br />
      <Field name="description" component={renderInput} label="Enter Description" />
      <br />
      <Button primary>Submit</Button>
    </Form>
  );
};

export default reduxForm<StreamFormData>({ form: "streamCreate" })(StreamCreate);
