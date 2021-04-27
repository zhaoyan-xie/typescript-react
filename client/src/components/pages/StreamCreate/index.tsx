import { connect, ConnectedProps } from "react-redux";
import { Field, InjectedFormProps, reduxForm, WrappedFieldProps } from "redux-form";
import { Button, Form, Label } from "semantic-ui-react";
import { createStream } from "./store";

interface P {
  label: string;
}
type ReduxProps = ConnectedProps<typeof connector>;
export interface StreamFormData extends FormData {
  title: string;
  description: string;
}

export const StreamCreate = (props: InjectedFormProps<StreamFormData> & ReduxProps) => {
  const renderInput = (formProps: WrappedFieldProps & P) => {
    return (
      <div>
        <Label>{formProps.label}</Label>
        <Form.Input {...formProps.input} />
      </div>
    );
  };
  const onSubmit = (formValues: StreamFormData) => {
    props.createStream(formValues);
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

const connector = connect(null, { createStream });
const connectedForm = connector(StreamCreate);

export default reduxForm<StreamFormData>({ form: "streamCreate" })(connectedForm);
