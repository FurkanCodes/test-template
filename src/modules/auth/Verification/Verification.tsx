import Button from '@mui/material/Button'
import { Form, Formik } from 'formik'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import AppInfoView from 'src/components/AppInfoView'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IntlMessages from 'src/helpers/IntlMessages'
import AppTextField from 'src/components/AppFormComponents/AppTextField'
import { Fonts } from 'src/constants/AppEnums'
import AuthWrapper from '../AuthWrapper'
import AppLogo from 'src/components/AppLayout/components/AppLogo'
import { useIntl } from 'react-intl'

const Verification = () => {
  const { messages } = useIntl()

  const validationSchema = yup.object({
    verificationCode: yup
      .string()
      .required(String(messages['validation.verificationCodeRequired'])),
  })

  return (
    <AuthWrapper>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ mb: { xs: 8, xl: 10 } }}>
          <Typography
            variant='h2'
            component='h2'
            sx={{
              mb: 1.5,
              color: theme => theme.palette.text.primary,
              fontWeight: Fonts.SEMI_BOLD,
              fontSize: { xs: 14, xl: 16 },
            }}
          >
            <IntlMessages id='common.enterVerificationCode' />
          </Typography>

          <Typography
            sx={{
              pt: 3,
              fontSize: 15,
              color: 'grey.700',
            }}
          >
            <span style={{ marginRight: 4 }}>
              <IntlMessages id='common.alreadyHavePassword' />
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
              <Link to='/signin'>
                <IntlMessages id='common.signIn' />
              </Link>
            </Box>
          </Typography>
        </Box>

        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Formik
              validateOnChange={true}
              initialValues={{
                verificationCode: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(data, { setSubmitting, resetForm }) => {
                setSubmitting(true)
                console.log(data)
                //reset password api goes here
                setSubmitting(false)
                resetForm()
              }}
            >
              {({ isSubmitting }) => (
                <Form style={{ textAlign: 'left' }}>
                  <Box sx={{ mb: { xs: 5, lg: 8 } }}>
                    <AppTextField
                      placeholder='Doğrulama Kodunu Giriniz'
                      name='verificationCode'
                      label={messages['common.VerificationCode'] as string}
                      sx={{
                        width: '100%',
                        '& .MuiInputBase-input': {
                          fontSize: 14,
                        },
                      }}
                      variant='outlined'
                    />
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: '10px',
                    }}
                  >
                    <Button
                      variant='contained'
                      color='primary'
                      disabled={isSubmitting}
                      sx={{
                        fontWeight: Fonts.REGULAR,
                        textTransform: 'capitalize',
                        fontSize: 16,
                        minWidth: 160,
                      }}
                      type='submit'
                    >
                      <IntlMessages id='common.verificationCode' />
                    </Button>
                    <Button
                      variant='contained'
                      color='primary'
                      disabled={isSubmitting}
                      sx={{
                        fontWeight: Fonts.REGULAR,
                        textTransform: 'capitalize',
                        fontSize: 16,
                        minWidth: 160,
                      }}
                      type='submit'
                    >
                      <IntlMessages id='common.sendVerificationCodeAgain' />
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>

          <AppInfoView />
        </Box>
      </Box>
    </AuthWrapper>
  )
}

export default Verification
