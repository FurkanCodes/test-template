import { Route, Routes } from 'react-router-dom'
import App from 'src/App'
import Shell from 'src/layout/Shell'

import NotFound from 'src/pages/ErrorPage/NotFound'
import Homepage from 'src/pages/Homepage'
import KullaniciYonetimi from 'src/pages/KullaniciYonetimi'
// import NotFound from './NotFound'

import Sts from 'src/pages/Sts'

const RouteSwitcher = () => {
  return (
    <Routes>
      <Route path='/homepage' element={<Homepage />} />
      <Route path='/sts' element={<Sts />} />
      <Route path='/KullaniciYonetimi' element={<KullaniciYonetimi />} />
      <Route path='/' element={<Homepage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default RouteSwitcher
