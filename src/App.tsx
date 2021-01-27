import React from "react";
//import logo from './logo.svg';
//import './App.css';
import  Tile from "./features/AutoSize";


const App = () => {
  // const elemRef = React.useRef(null);
  //const [pElem, setPElem] = React.useState(elemRef.current)
  // const [refIsSet, setRefIsSet]= React.useState(false)
  // React.useEffect(() => {
  //   setRefIsSet(true)
  //   //console.log(pElem)
  // },[])
  return (
    <>
      <Tile scrollBarProp = {{}}>
        {({ width, height, className}) => (
          <div
            style={{ height, width}}
            className={className}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet consectetur urna. Proin malesuada risus sed est hendrerit lacinia. In at nisi posuere metus finibus ornare sed vel enim. Etiam vitae pellentesque tortor, ac gravida risus. Nam ut efficitur erat. Vestibulum vestibulum elit sit amet urna viverra, mattis dapibus leo rutrum. Pellentesque eleifend nunc eget est molestie, quis finibus ligula vehicula. Vivamus sit amet tortor pharetra, lacinia mi et, volutpat turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Ut quis diam eu augue tempus accumsan ultricies a diam. Praesent at tellus purus. Aliquam lacinia suscipit magna in feugiat. Integer malesuada nisi libero, ut fermentum tortor viverra at. Fusce id nibh placerat, pretium nibh sed, vehicula justo. Sed semper, dolor rutrum facilisis suscipit, turpis lorem pretium elit, et interdum turpis tortor quis justo. Etiam eget placerat turpis. Nulla vel cursus mi. Donec porta velit sapien, ac bibendum dui tempor vitae. Suspendisse sit amet convallis justo. Integer diam risus, finibus ut tincidunt euismod, bibendum eget lectus. Nam suscipit interdum nulla ac vestibulum. Sed vitae magna sit amet nisi mattis volutpat.

Nunc a malesuada dolor. In hac habitasse platea dictumst. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi interdum ut sem in condimentum. Sed tempor feugiat metus, vel porta ligula dapibus sit amet. Fusce ac ex vel sapien sollicitudin lobortis vitae id mauris. Etiam quis risus ac leo viverra fermentum. Nulla tempus sem non ligula feugiat, non maximus neque pellentesque. Phasellus sem metus, interdum at porta sed, tempor ac ipsum. Fusce risus sapien, imperdiet eget luctus at, fermentum non ligula.

Nulla vulputate nisl non auctor sodales. Nunc nulla nunc, egestas sit amet ultrices nec, lobortis a lorem. Praesent varius, nunc mattis bibendum imperdiet, nulla enim molestie lorem, non tempor sapien augue sed lectus. Vivamus et purus condimentum quam laoreet gravida. Nam fringilla eu risus id vulputate. Praesent ultricies sapien quis dolor aliquam, ac iaculis tellus rutrum. Vestibulum pellentesque, ante quis viverra interdum, enim nulla viverra enim, ullamcorper dapibus nisi velit id urna. Nulla porttitor sodales ex sit amet faucibus. Praesent sed fringilla dui. Phasellus a gravida nulla. Morbi finibus lectus sed lacus fringilla, quis lacinia ipsum facilisis. Phasellus pretium aliquet faucibus. Ut scelerisque vel tellus et euismod. Praesent maximus, turpis sed suscipit viverra, odio diam porttitor ipsum, eu pharetra nisi augue sed orci. Mauris ultricies velit erat, in dignissim nibh pharetra iaculis. Vestibulum tristique pellentesque magna id bibendum.

Mauris lacinia imperdiet massa id viverra. Sed nec sagittis dolor, sit amet iaculis mauris. Donec ullamcorper nec metus id blandit. Vivamus condimentum ante et interdum tempus. Phasellus aliquet condimentum pulvinar. Cras tempus semper nibh, vestibulum sodales elit iaculis quis. Donec sollicitudin mattis interdum. Vivamus vestibulum, diam nec ornare vulputate, orci arcu tincidunt nulla, gravida placerat nunc enim a erat. Pellentesque a massa quis neque ullamcorper consectetur eu id leo. Quisque vehicula malesuada augue id vulputate. Vestibulum sit amet risus lobortis, pellentesque tellus vitae, auctor massa. Aenean vitae fermentum sem, tristique aliquam tortor. Proin at tellus nulla.
          </div>
        )}
      </Tile>
      </>
  );
};

export default App;
