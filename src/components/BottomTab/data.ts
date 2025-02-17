import {Dimensions} from 'react-native';

const vw = Dimensions.get('window').width * 0.01;
const vh = Dimensions.get('window').height * 0.01;

const PATH = [
  `
      M ${vw * 0} ${vw * 0} 
      h ${vw * -2} 
      c ${vw * 10} ${vw * 0}, ${vw * 15} ${vw * 10}, ${vw * 20} ${vw * 10} 
      c ${vw * 10} ${vw * 2}, ${vw * 10} -${vw * 10}, ${vw * 20} -${vw * 10} 
      h ${vw * 62} 
      v ${vw * 20} 
      h -${vw * 100} 
      z
    `,

  `
            M ${vw * 0} ${vw * 0}
            h ${vw * 18}
            c ${vw * 10} ${vw * 0}, ${vw * 15} ${vw * 10} ${vw * 20} ${vw * 10}
            c ${vw * 10} ${vw * 2}, ${vw * 10} -${vw * 10} ${vw * 20} -${
    vw * 10
  }
            h ${vw * 42}
            v ${vw * 20}
            h -${vw * 100}
            z
            `,

  `
            M ${vw * 0} ${vw * 0}
            h ${vw * 39}
            c ${vw * 10} ${vw * 0}, ${vw * 15} ${vw * 10} ${vw * 20} ${vw * 10}
            c ${vw * 10} ${vw * 2}, ${vw * 10} -${vw * 10} ${vw * 20} -${
    vw * 10
  }
            h ${vw * 21}
            v ${vw * 20}
            h -${vw * 100}
            z
            `,

  `
          M ${vw * 0} ${vw * 0} 
          h ${vw * 60} 
          c ${vw * 10} ${vw * 0}, ${vw * 15} ${vw * 10}, ${vw * 20} ${vw * 10} 
          c ${vw * 10} ${vw * 2}, ${vw * 10} -${vw * 10}, ${vw * 20} -${
    vw * 10
  } 
          h ${vw * 0} 
          v ${vw * 20} 
          h -${vw * 100} 
          z
        `,
];

export {PATH};
