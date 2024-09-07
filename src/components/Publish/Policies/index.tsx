import Input from '@shared/FormInput'
import { Field } from 'formik'
import { ReactElement } from 'react'
import content from '../../../../content/publish/form.json'
import { getFieldContent } from '@utils/form'

export default function PoliciesFields(): ReactElement {
  return (
    <>
      <Field
        {...getFieldContent('timeout', content.services.fields)}
        component={Input}
        name="services[0].timeout"
      />
      <Field
        {...getFieldContent('allow', content.services.fields)}
        component={Input}
        name="services[0].allow"
      />
      <Field
        {...getFieldContent('deny', content.services.fields)}
        component={Input}
        name="services[0].deny"
      />

      {/*
       Licensing and Terms
      */}
      <Field
        {...getFieldContent('license', content.metadata.fields)}
        component={Input}
        name="metadata.license"
      />
      <Field
        {...getFieldContent(
          'accessTermsAndConditions',
          content.metadata.fields
        )}
        component={Input}
        name="metadata.gaiaXInformation.termsAndConditions"
      />
    </>
  )
}
