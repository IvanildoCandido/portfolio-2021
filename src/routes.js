import { Route, Switch } from 'react-router';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Services from './pages/Services/Services';
import Skills from './pages/Skills/Skills';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/services">
        <Services />
      </Route>
      <Route exact path="/skills">
        <Skills />
      </Route>
      <Route exact path="/projects">
        <Projects />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
};
export default Routes;
