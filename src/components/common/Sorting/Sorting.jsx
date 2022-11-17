import React from 'react';
import {Field, Form, Formik} from "formik";

const Sorting = ({initialSort, onSortInput, sortingList}) => {
    return (
        <Formik initialValues={{sort: initialSort}} onSubmit={(values, {setSubmitting}) => {
            onSortInput(values.sort)
            setSubmitting(false);
        }}>
            {({isSubmitting, handleSubmit}) => (
                <Form>
                    <Field as="select" className="form-select" name="sort" onInput={handleSubmit} tabIndex="-1">
                        {sortingList.map(i => <option value={i.value}>{i.title}</option>)}
                    </Field>
                </Form>
            )
            }
        </Formik>
    );
};

export default Sorting;