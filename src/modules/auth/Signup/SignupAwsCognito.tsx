import { Form, Formik } from 'formik'
import * as yup from 'yup'
import AppTextField from 'src/components/AppFormComponents/AppTextField'
import IntlMessages from 'src/helpers/IntlMessages'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import AppInfoView from 'src/components/AppInfoView'
import Auth, { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth'
import { Fonts } from 'src/constants/AppEnums'
import { Link } from 'react-router-dom'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineGoogle } from 'react-icons/ai'
import { useAwsCognitoActions } from 'src/services/auth/aws-cognito/AWSAuthProvider'
import { useIntl } from 'react-intl'
import AuthWrapper from '../AuthWrapper'

const SignupAwsCognito = () => {
  const { signUpCognitoUser } = useAwsCognitoActions()
  const { messages } = useIntl()

  const validationSchema = yup.object({
    name: yup.string().required(String(messages['validation.nameRequired'])),
    email: yup
      .string()
      .email(String(messages['validation.emailFormat']))
      .required(String(messages['validation.emailRequired'])),
    password: yup
      .string()
      .required(String(messages['validation.passwordRequired'])),
    confirmPassword: yup
      .string()
      .required(String(messages['validation.reTypePassword'])),
  })

  return (
    <AuthWrapper>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', mb: 5 }}>
          <Formik
            validateOnChange={true}
            initialValues={{
              name: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(data, { setSubmitting, setErrors }) => {
              if (data.password !== data.confirmPassword) {
                setErrors({
                  confirmPassword: String(
                    <IntlMessages id='validation.passwordMisMatch' />,
                  ),
                })
              } else {
                setSubmitting(true)
                signUpCognitoUser({
                  email: data.email,
                  password: data.password,
                  name: data.name,
                })
                setSubmitting(false)
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form style={{ textAlign: 'left' }} noValidate autoComplete='off'>
                <Box sx={{ mb: { xs: 4, xl: 5 } }}>
                  <AppTextField
                    label={<IntlMessages id='common.name' />}
                    name='name'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      '& .MuiInputBase-input': {
                        fontSize: 14,
                      },
                    }}
                  />
                </Box>

                <Box sx={{ mb: { xs: 4, xl: 5 } }}>
                  <AppTextField
                    label={<IntlMessages id='common.email' />}
                    name='email'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      '& .MuiInputBase-input': {
                        fontSize: 14,
                      },
                    }}
                  />
                </Box>

                <Box sx={{ mb: { xs: 4, xl: 5 } }}>
                  <AppTextField
                    label={<IntlMessages id='common.password' />}
                    name='password'
                    type='password'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      '& .MuiInputBase-input': {
                        fontSize: 14,
                      },
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    mb: { xs: 3, xl: 4 },
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Checkbox
                      id='iAgreeTo'
                      sx={{
                        ml: -3,
                      }}
                    />
                    <Box
                      aria-labelledby='iAgreeTo'
                      component='span'
                      sx={{
                        mr: 2,
                        color: 'grey.700',
                      }}
                    >
                      <IntlMessages id='common.iAgreeTo' />
                    </Box>
                  </Box>
                  <Box
                    component='span'
                    sx={{
                      color: theme => theme.palette.primary.main,
                      cursor: 'pointer',
                    }}
                  >
                    <IntlMessages id='common.termConditions' />
                  </Box>
                </Box>

                <div>
                  <Button
                    variant='contained'
                    color='primary'
                    disabled={isSubmitting}
                    sx={{
                      minWidth: 160,
                      fontWeight: Fonts.REGULAR,
                      fontSize: 16,
                      textTransform: 'capitalize',
                      padding: '4px 16px 8px',
                    }}
                    type='submit'
                  >
                    <IntlMessages id='common.signup' />
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Box>

        <Box
          sx={{
            color: 'grey.700',
            mb: { xs: 5, md: 7 },
          }}
        >
          <span style={{ marginRight: 4 }}>
            <IntlMessages id='common.alreadyHaveAccount' />
          </span>
          <Box
            component='span'
            sx={{
              fontWeight: Fonts.MEDIUM,
              '& a': {
                color: theme => theme.palette.primary.main,
                textDecoration: 'none',
              },
            }}
          >
            <Link to='/signIn'>
              <IntlMessages id='common.signIn' />
            </Link>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: theme => theme.palette.background.default,
            mx: { xs: -5, lg: -10 },
            mb: { xs: -6, lg: -11 },
            mt: 'auto',
            py: 2,
            px: { xs: 5, lg: 10 },
          }}
        >
          <Box
            sx={{
              color: theme => theme.palette.text.secondary,
            }}
          >
            <IntlMessages id='auth.orSignupWith' />
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IconButton
              aria-label='Google'
              sx={{
                p: 2,
                '& svg': { fontSize: 20 },
                color: theme => theme.palette.text.secondary,
              }}
              onClick={() =>
                Auth.federatedSignIn({
                  provider: CognitoHostedUIIdentityProvider.Google,
                })
              }
            >
              <AiOutlineGoogle />
            </IconButton>
            <IconButton
              aria-label='Facebook'
              sx={{
                p: 1.5,
                '& svg': { fontSize: 20 },
                color: theme => theme.palette.text.secondary,
              }}
              onClick={() =>
                Auth.federatedSignIn({
                  provider: CognitoHostedUIIdentityProvider.Facebook,
                })
              }
            >
              <FaFacebookF />
            </IconButton>
          </Box>
        </Box>

        <AppInfoView />
      </Box>
    </AuthWrapper>
  )
}

export default SignupAwsCognito
