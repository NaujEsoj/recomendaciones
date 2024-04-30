import { useRef, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

import Down from '../../assets/down.png'
import Robot from '../../assets/robot.png'

import Signature from '../../layout/Signature'

import Zero from '../../assets/0.png'
import One from '../../assets/1.png'
import Two from '../../assets/2.png'
import Three from '../../assets/3.png'
import Four from '../../assets/4.png'
import Five from '../../assets/5.png'
import Six from '../../assets/6.png'
import Seven from '../../assets/7.png'
import Eight from '../../assets/8.png'
import Nine from '../../assets/9.png'

function Amigos() {

  const numbersGuide = useRef();

  const handleScroll = () => {
    numbersGuide.current.scrollIntoView({ behavior: 'smooth' });
  };


	const numbersMatrix = {
		0 : ['0', '1', '1', '0',
		'1', '0', '0', '1',
		'1', '0', '0', '1',
		'1', '0', '0', '1',
		'1', '0', '0', '1',
		'1', '0', '0', '1',
		'0', '1', '1', '0'],

		1 : ['0', '0', '1', '0',
		'0', '1', '1', '0',
		'0', '0', '1', '0',
		'0', '0', '1', '0',
		'0', '0', '1', '0',
		'0', '0', '1', '0',
		'0', '0', '1', '0'],

 2 : ['0', '1', '1', '0',
		'1', '0', '0', '1',
		'1', '0', '0', '1',
		'0', '0', '1', '0',
		'0', '1', '0', '0',
		'1', '0', '0', '0',
		'1', '1', '1', '1'],

3 : ['0', '1', '1', '0',
			'1', '0', '0', '1',
			'0', '0', '0', '1',
			'0', '1', '1', '0',
			'0', '0', '0', '1',
			'1', '0', '0', '1',
			'0', '1', '1', '0'],

4 : ['1', '0', '0', '0',
		'1', '0', '1', '0',
		'1', '0', '1', '0',
		'1', '1', '1', '1',
		'0', '0', '1', '0',
		'0', '0', '1', '0',
		'0', '0', '1', '0'],

5: ['1', '1', '1', '1',
		 '1', '0', '0', '0',
		 '1', '0', '0', '0',
		 '1', '1', '1', '0',
		 '0', '0', '0', '1',
		 '1', '0', '0', '1',
		 '0', '1', '1', '0'],

6: ['0', '1', '1', '0',
		'1', '0', '0', '1',
		'1', '0', '0', '0',
		'1', '1', '1', '0',
		'1', '0', '0', '1',
		'1', '0', '0', '1',
		'0', '1', '1', '0'],

7: ['1', '1', '1', '1',
			'1', '0', '0', '1',
			'0', '0', '0', '1',
			'0', '0', '1', '0',
			'0', '0', '1', '0',
			'0', '1', '0', '0',
			'0', '1', '0', '0'],

8 : ['0', '1', '1', '0',
			'1', '0', '0', '1',
			'1', '0', '0', '1',
			'0', '1', '1', '0',
			'1', '0', '0', '1',
			'1', '0', '0', '1',
			'0', '1', '1', '0'],

9: ['0', '1', '1', '0',
		 '1', '0', '0', '1',
		 '1', '0', '0', '1',
		 '0', '1', '1', '1',
		 '0', '0', '0', '1',
		 '1', '0', '0', '1',
		 '0', '1', '1', '0'],
	}


	const matrix1 = useRef(null)
	const matrix2 = useRef(null)
	const matrix3 = useRef(null)
	const matrix4 = useRef(null)
	const guide = useRef(null)

	const [checkboxes1, setCheckboxes1] = useState(null)
	const [checkboxes2, setCheckboxes2] = useState(null)
	const [checkboxes3, setCheckboxes3] = useState(null)
	const [checkboxes4, setCheckboxes4] = useState(null)

	const [completeNum1, setCompletenum1] = useState(false)
	const [completeNum2, setCompletenum2] = useState(false)
	const [completeNum3, setCompletenum3] = useState(false)
	const [completeNum4, setCompletenum4] = useState(false)

	//Set random numbers
	const [value1] = useState(Math.floor(Math.random() * 9))
	const [value2] = useState(Math.floor(Math.random() * 9))
	const [value3] = useState(Math.floor(Math.random() * 9))
	const [value4] = useState(Math.floor(Math.random() * 9))

	useEffect(() => {
		const handleCheckboxSetup = () => {
			if (matrix1.current) {
				const checkboxes1 = matrix1.current.querySelectorAll('input[type="checkbox"]');
				setCheckboxes1(checkboxes1);
			}
			if (matrix2.current) {
				const checkboxes2 = matrix2.current.querySelectorAll('input[type="checkbox"]');
				setCheckboxes2(checkboxes2);
			}
			if (matrix3.current) {
				const checkboxes3 = matrix3.current.querySelectorAll('input[type="checkbox"]');
				setCheckboxes3(checkboxes3);
			}
			if (matrix4.current) {
				const checkboxes4 = matrix4.current.querySelectorAll('input[type="checkbox"]');
				setCheckboxes4(checkboxes4);
			}
		};

		handleCheckboxSetup();
	}, []);

	// Use the checkboxes from state elsewhere:
	function handleMatrix1() {
		let matrix1 = []
		for (const checkbox of checkboxes1) {
			if (checkbox.checked) {
				matrix1.push('1')
			} else {
				matrix1.push('0')
			}
		}
		if (JSON.stringify(matrix1) === JSON.stringify(numbersMatrix[value1])) {
			setCompletenum1(true)
		} else {
			setCompletenum1(false)
		}
	}

	function handleMatrix2() {
		let matrix2 = []
		for (const checkbox of checkboxes2) {
			if (checkbox.checked) {
				matrix2.push('1')
			} else {
				matrix2.push('0')
			}
		}
		if (JSON.stringify(matrix2) === JSON.stringify(numbersMatrix[value2])) {
			setCompletenum2(true)
		} else {
			setCompletenum2(false)
		}
	}

	function handleMatrix3() {
		let matrix3 = []
		for (const checkbox of checkboxes3) {
			if (checkbox.checked) {
				matrix3.push('1')
			} else {
				matrix3.push('0')
			}
		}
		if (JSON.stringify(matrix3) === JSON.stringify(numbersMatrix[value3])) {
			setCompletenum3(true)
		} else {
			setCompletenum3(false)
		}
	}

	function handleMatrix4() {
		let matrix4 = []
		for (const checkbox of checkboxes4) {
			if (checkbox.checked) {
				matrix4.push('1')
			} else {
				matrix4.push('0')
			}
		}
		if (JSON.stringify(matrix4) === JSON.stringify(numbersMatrix[value4])) {
			setCompletenum4(true)
		} else {
			setCompletenum4(false)
		}
	}

  const renderGuideNumbres = () => {
    for (const key in numbersMatrix) {
      if (numbersMatrix.hasOwnProperty.call(numbersMatrix, key)) {
        const number = numbersMatrix[key];

        number.forEach(e => {
          let checkboxes = ''
          console.log(e);
          if (e === 1) {
            checkboxes = '<input type="checkbox" checked />'
          }

          if (guide.current) {
            guide.current.innerHTML = checkboxes
          }
        });
      }
    }
  }

  renderGuideNumbres()

  return (
    <>
      <div className='w-screen flex flex-col items-center'>
      	<div className='my-16 flex flex-col items-center'>
        	<h1 className='text-xl m-3 flex'>Por favor prueba que no eres un <img className='w-8' src={Robot} alt="Robot" /></h1>
        	<h1 className='text-2xl'>Introduce los numeros:</h1>
		  		<p className='text-center text-sm '>(Guia de numeros abajo)</p>
		  		<img className='text-center m-4 animate-bounce pointer cursor-pointer' width={20} src={Down} alt="Down arrow" onClick={handleScroll} />
      	</div>
		  	<div>
		  		<p className='text-4xl'>{value1} {value2} {value3} {value4}</p>
		  	</div>
		  	<div className='flex flex-wrap w-11/12 justify-around m-4 max-w-2xl'>
        	<div className={`m-4 ${completeNum1 ? 'bg-green-600' : ''}`} ref={matrix1} onClick={handleMatrix1}>
		  			<div className='flex '>
		  				<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i111"/>
		  				<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i112"/>
		  				<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i113"/>
		  				<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i114"/>
		  			</div>
		  			<div className='flex '>
		  				<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i111"/>
		  				<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i112"/>
		  				<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i113"/>
		  				<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i114"/>
		  			</div>
		  			<div className='flex '>
		  				<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i111"/>
		  				<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i112"/>
		  				<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i113"/>
		  				<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i114"/>
		  			</div>
		  			<div className='flex '>
		  				<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i111"/>
		  				<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i112"/>
		  				<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i113"/>
		  				<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i114"/>
		  			</div>
		  			<div className='flex '>
		  				<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i111"/>
		  				<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i112"/>
		  				<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i113"/>
		  				<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i114"/>
		  			</div>
		  			<div className='flex '>
		  				<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i111"/>
		  				<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i112"/>
		  				<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i113"/>
		  				<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i114"/>
		  			</div>
		  			<div className='flex '>
		  				<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i111"/>
		  				<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i112"/>
		  				<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i113"/>
		  				<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i114"/>
		  			</div>
        	</div>
		  			<div className={`m-4 ${completeNum2 ? 'bg-green-600' : ''}`} ref={matrix2} onClick={handleMatrix2}>
		  				<div className='flex '>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i111"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i112"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i113"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i114"/>
		  				</div>
		  				<div className='flex '>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i111"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i112"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i113"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i114"/>
		  				</div>
		  				<div className='flex '>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i111"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i112"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i113"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i114"/>
		  				</div>
		  				<div className='flex '>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i111"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i112"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i113"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i114"/>
		  				</div>
		  				<div className='flex '>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i111"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i112"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i113"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i114"/>
		  				</div>
		  				<div className='flex '>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i111"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i112"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i113"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i114"/>
		  				</div>
		  				<div className='flex '>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i111"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i112"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i113"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i114"/>
		  				</div>
        		</div>
		  			<div className={`m-4 ${completeNum3 ? 'bg-green-600' : ''}`} ref={matrix3} onClick={handleMatrix3}>
		  				<div className='flex '>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i111"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i112"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i113"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i114"/>
		  				</div>
		  				<div className='flex '>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i111"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i112"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i113"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i114"/>
		  				</div>
		  				<div className='flex '>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i111"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i112"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i113"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i114"/>
		  				</div>
		  				<div className='flex '>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i111"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i112"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i113"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i114"/>
		  				</div>
		  				<div className='flex '>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i111"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i112"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i113"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i114"/>
		  				</div>
		  				<div className='flex '>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i111"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i112"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i113"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i114"/>
		  				</div>
		  				<div className='flex '>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i111"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i112"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i113"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i114"/>
		  				</div>
        		</div>
		  			<div className={`m-4 ${completeNum4 ? 'bg-green-600' : ''}`} ref={matrix4} onClick={handleMatrix4}>
		  				<div className='flex '>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i111"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i112"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i113"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i114"/>
		  				</div>
		  				<div className='flex '>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i111"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i112"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i113"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i114"/>
		  				</div>
		  				<div className='flex '>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i111"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i112"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i113"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i114"/>
		  				</div>
		  				<div className='flex '>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i111"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i112"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i113"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i114"/>
		  				</div>
		  				<div className='flex '>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i111"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i112"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i113"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i114"/>
		  				</div>
		  				<div className='flex '>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i111"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i112"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i113"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i114"/>
		  				</div>
		  				<div className='flex '>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i111"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i112"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i113"/>
		  					<input className='w-5 h-5 m-1 md:w-4 md:h4 md:m-0.5' type="checkbox" id="i114"/>
		  				</div>
		  			</div>
		  	</div>

        <div className='btn btn-primary border-2' disabled={!(completeNum1 && completeNum2 && completeNum3 && completeNum4)}>
          <Link to="/media-selector">
            Continuar!
          </Link>
        </div>
      	<div ref={numbersGuide} className='my-16 flex items-center flex-col'>
        	<h1 className='text-xl m-3'>Guía de números:</h1>
          <div className='flex flex-wrap justify-center w-11/12 md:w-full'>
            <img className='w-1/4 m-6 md:w-16' src={Zero} alt="Zero" />
            <img className='w-1/4 m-6 md:w-16' src={One} alt="One" />
            <img className='w-1/4 m-6 md:w-16' src={Two} alt="Two" />
            <img className='w-1/4 m-6 md:w-16' src={Three} alt="Three" />
            <img className='w-1/4 m-6 md:w-16' src={Four} alt="Four" />
            <img className='w-1/4 m-6 md:w-16' src={Five} alt="Five" />
            <img className='w-1/4 m-6 md:w-16' src={Six} alt="Six" />
            <img className='w-1/4 m-6 md:w-16' src={Seven} alt="Seven" />
            <img className='w-1/4 m-6 md:w-16' src={Eight} alt="Eight" />
            <img className='w-1/4 m-6 md:w-16' src={Nine} alt="Nine" />
          </div>
      	</div>
      </div>
      <Signature />
    </>
  )
}

export default Amigos
