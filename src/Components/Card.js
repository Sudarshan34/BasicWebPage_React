import React from 'react'
import Webdevimage from './webdev.png'
import Cybersec from './cybersec.jpg'
import dml from './DML.png'


function Card() {
    return (
        <div className='root'>

            <div className='cards'>
                <div className='c1'>
                    <img src={Webdevimage} className='img'></img>
                    <p className='cardp1'>
                        This course covers the fundamentals of web development, including HTML, CSS, JavaScript, and popular web development frameworks and tools. Students learn how to create and design websites and web applications from scratch. Topics may include responsive design, front-end and back-end development, and database integration.
                    </p>
                </div>

                <div className='c2'>
                    <img src={Cybersec} className='img'></img>
                    <p className='cardp1'>
                        In this certification program, students learn how to protect computer systems, networks, and data from cyber threats and attacks. The course covers ethical hacking, network security, cryptography, and security policies. Graduates are equipped to work as cybersecurity professionals, helping organizations secure their digital assets.
                        Skills Learned: Network Security, Ethical Hacking, Cryptography, Security Policy Management, Security Auditing, Incident Response, Vulnerability Assessment, Penetration Testing.
                    </p>
                </div>

                <div className='c3'>
                    <img src={dml} className='img'></img>
                    <p className='cardp1'>
                    This course focuses on data analysis, machine learning, and artificial intelligence. Students learn how to collect, clean, and analyze data, as well as build predictive models using machine learning algorithms. The program covers programming languages like Python and data science libraries like TensorFlow and scikit-learn.
                    </p>
                </div>

            </div>

            <div className='end'>
                Made with Love  using React 💟
            </div>




        </div>


    )
}


export default Card