import React from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import HomePage from '../../features/home/HomePage';
import { Route, Routes, useLocation } from 'react-router-dom';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';

function App() {
  const location = useLocation();

  // return (
  //   <>
  //     {<NavBar />}
  //     <Container style={{ marginTop: '7em' }}>
  //       <Routes>
  //         <Route path='/' element={<HomePage />} />
  //         <Route path='/activities' element={<ActivityDashboard />} />
  //         <Route path='/activities/:id' element={<ActivityDetails />} />
  //         <Route key={location.key} path='/createActivity' element={<ActivityForm />} />
  //         <Route key={location.key} path='/manage/:id' element={<ActivityForm />} />
  //       </Routes>
  //     </Container>
  //   </>
  // );


  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path={'/*'}
          element={
            <>
              <NavBar />
              <Container style={{ marginTop: '7em' }}>
                <Routes>
                  <Route path='/activities' element={<ActivityDashboard />} />
                  <Route path='/activities/:id' element={<ActivityDetails />} />
                  <Route key={location.key} path='/createActivity' element={<ActivityForm />} />
                  <Route key={location.key} path='/manage/:id' element={<ActivityForm />} />
                </Routes>
              </Container>
            </>
          }
        />
      </Routes>
    </>
  );
}


export default observer(App);
