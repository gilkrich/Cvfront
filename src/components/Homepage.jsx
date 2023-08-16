import React from 'react'
import './homepage.css'
import firsttemp from './images/firsttemp.png'
import sectemp from './images/sectemp.png'
import { Outlet, Link, useParams,useNavigate } from 'react-router-dom'
const Homepage = () => {
   const navigate = useNavigate();
   return (
      <div>
         <div className='hero-cont'>
            <div className='hero-text-cont'>
               <span className='abs-one'>Job-winning CV templates</span>
               <button className='create-cv-button' onClick={()=>navigate('/makecv')}>create my cv</button>
            </div>
            <img src='https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/03/30230420/Resume-Format-for-Freshers.png' className='hero-image' alt="" width='200px' />
         </div>
         <div style={{ textAlign: 'center' }}>
            <h1>Simple to use , Good style</h1>
         </div>
         <div style={{ textAlign: 'center' }}>
            <h2>just 3 steps</h2>
         </div>
         <div className='parts-cont' style={{ display: 'flex', justifyContent: 'space-around', marginTop: '70px' }}>
            <div className='part-one' style={{ display: 'flex', width: '170px', flexDirection: 'column' }}>
               <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAACICAMAAAD9ARS9AAAAYFBMVEX///8AAAAHBwf29vZ7e3uampq1tbWurq67u7tGRkZ3d3dUVFSysrKVlZXAwMCFhYXl5eXv7+/V1dXOzs6ioqIYGBghISEQEBBkZGQ7OztaWlqLi4tra2scHBwvLy/f39+0f6wSAAADmklEQVR4nO3c2XaqMBQGYAIyqkgEBxTl/d+y0iAy7AwbQlynJ/9dl00/TQMkO2kd55Ws2LrERM5J6ozjX4zQLPFxiB8M2k0GvG8YJyf6wTOT3c6SfPTCOE7OWadvzesk6vS241PHM5Arw4pOby90b3IdrpF2hPtWt7rVrf5v6JSQxz7/lu6UTatyh2unS/dK1i6eTtRW1/OKdKkQTXXoXkL6OR/lTfTpXkyGuSiPPg36jUySyVtp0qE5cGlKp09AJ4q/+sV6CuHkbkiHZ+A3tfaLdXjdVVr9S3psSN9/VYfH/NaQfod1tcZLdV6hozKhexycnOpv6k+lx9zSnr9ydLVf/FIdfsg01QcTOqfSclVrvFivwaqm4uRm+dwGut3sFdsu171p3ys+Y7TMKvOJHskbadMn97tE3kSj/l5FtTlTeRONupMPxj1iJatHnzPetenD1Yx6x2vR6+GgU5xNa9Lp+IJPlD/9Yv0ITW4OiiNviZ7lRcXdybiGubwL5uo0rWJw/dhLufVr8c+Zp9PDSSJ370C4npynnxXtJrFufYfAhdOcWfoGpQseOrN03L6VYII5SwfqRILcNOvHCBNBDedv1KitbnWrW12zXt83yAT8T4LVQ/7ThBt+6RCpw7UCWQ6a9GgOTs48ve3JcFWdu01D2eufZ7BYzzDzyS78hWU0/OiyUZerTqV7EVVN6S7sLzpkVxwNQmTUtyYN322sbvW/qHvpJpalCug6ej4+GwDnWayhw9t1UG76dXWc8Vr1aflaFF+zXoq5UU5Uq35E4c2jVqeOPRRdSXUv5VUJ0kkbXH2nmYHJZheiY9bj+mgi+F4wEh0+39K990xJ3xT3B/iCK9F5W49tIhV993olm6VL6oSBgs5KWOChAZleQ40+GU3hQP3A70SZLr6IxjNn7bqTXrecXCcFWf06Jla3+kgHF8Pr6dW+Dbsy6veXm5MBPeR+U72+LjoF4q+uizam89V1UQGhWF13+Ruz3ml1/dX3O5aQvY8sbL8uehON/+RuY3WrW92Mzh444C5DpyMODCH135uuBxab3feC/4ndfenlHol0Qvy0gAvtLudkMjIHoc6Niyy18MKWVNj1+wN7rIETts+DqVg1ucmW6IphtT9sPzaTv0ytuihMe8ngPsjlt/jg+bP2fnp5D/oA1arbtjtGwfz0ykeYcaf41w6YqP8bgxXw1y0VLhCN427W2RGgQSJ7A5dbwf7U4AdF5j7TCbLBhwAAAABJRU5ErkJggg==' alt="" width='150px' />
               <h2>Register and become a member of our coumuunity</h2>
            </div>
            <div className='part-one' style={{ display: 'flex', width: '170px', flexDirection: 'column' }}>
               <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAY1BMVEX///8AAACKioro6OgODg51dXWdnZ0vLy/09PRHR0dQUFC7u7vg4OB4eHjc3Nynp6c4ODjDw8OQkJAUFBRZWVlpaWlhYWE/Pz+urq6CgoJvb2/U1NTJycm1tbUbGxuXl5cnJycvRlS8AAAFC0lEQVRoge2bDZeqIBCGITNRKzM/MjXr///KO4CQKLmyoXb39J49m4j5pMI4MwBCoP3OT/BySvzdHrW6LsgVunJ0ugIa41Re9eWwWU6HS3vle/pZoGVVUOge7VZAc/gO+XDDxR5CuvVqQSm9L7jtPoLOdeDF2E8S7y5YhyZp0mNbCi9QFdlkH6CrIbj4DSudefvz2QXut7wUsqq2E+YWr30D55PsWDR+l5YuouRA4SYK15nY8NxxuaGXS/gPedz9FpewKvjXOLOwnQe74hCKN36TgXPCOIBHzw+J4COehb1vMIbGdMTsA1pCAzszYBPk8F5Yz8YmcI24Pubwv0Ks02+OtBNmUAcfXn30edUMbFZgekDBkWaXNnRXFAJraJVNRNOuaSlqCyWranhha++yVTZy2PvsUfM6Dm+tjhPQgmcR3WNDQ4uiWlaSMCqeXaoqOlVzsJfUJ7CvxFla5NqycbJdWsw1RXg9rc1Oo9003cHIBBOPHVeUtuzz1MZJPGlu3tUZG/YxynbtsI37959k12kQBCUN0uI86CkttOyo7B84qkP8gu1wz/TUfXl3VA/Z1M0ylDvK9qezfWM0jUW09zz0QSwauPkD7Yb3vIJvPoZHjojC9ewJUtjUpzPzJmifFi7Be2w409bMX6cOuEg4fNlrs+scxGxLmEuV++6X52I7jbZ/p4uwOctrMzBCSihim70V7++Q2vOM2ZZUmuDs2P2ybXbspZPPYJuNDBIZ1tkG+rIts2vwVnyX+S2ynfPy7GyHZ9Av0otYwLaIbGVLvCxp125ewM8QXk6nU0C9gYJucQWz2pbEMC75c+/QL3t5dp2BDvRscaYol0MaC/stTMIN77PxvH4Lk0jrzXbPQ2rAc2pLilSNH2X/V9h3vF5cQuOx5mQijG3FYzbjUGO24xmjn4mid3MepMiMYuBrJxX9QfkWmmVxmW2Zmm+xxe7YFt0cgGrIduIxic7k1J2dNdGz9X6L0DDfMjRBml/bb5C+/p7fvIf38Ok3IthS9GiHaAe2ZUz8rHFvrx3bor09HXFvS3E8O8Pdb7ZzMvq8xZMl3ef9tMGf08d+w3aOJuq+9d5l10HzwzNX9Sif9J5tKUHMb2FbZTkcjFPZoRGYyXO07NaidPyW4Ui7wibmaIxzPbv9ZU/20CtR2HQmQlZEBqJmhujY6Bb4gZ+zmAi24O82fs/N/TX6a1/5yEROYiFEO5/lk/xzW37qb9h/Ii5Zk11laZpy20K3FOW3WdnGfovNmMjUb7HZzosmSbYX5rfAVk88LFLYtZjzZYE9Qeq7JL4bTq2yyDbWl/1J7MoFXZltcRWV8mU6F9s432KTLf2WifkWRI7ITCO2JaBj0My2BGrcLNtDPy4xnLc50taI6rc8Jb/cj8eSr9/yZf+GXZV5nnPbUuaK9LbFvt8S6PyWhXK5p8m2hc4i3RlNFKSTfvUxEVsDwOagRj20NCFGOQ+tPKRlT5BqU8+/YMukx7vv0J8yTcOrfob0b7+/SR2aqOq4lv93rscWuzqANkRscW3URSYKO3IPr+WKFSE3Zbe+rb3wW17PMfkp1cPhdW+vns3r+rblNbtvBfq6a9kvbAubO0d7QcdvCaqXbFSODhJkLWWj7H01XqLzW5Ci/pjFmPRHyb1i/HvyVFuL7ZytJ+quo1qQzdZRmawfs8fm68eM1s3ZmgvdrpszWi8INuBicb3gquskV10futq62H+4kXUJMnT0ogAAAABJRU5ErkJggg==' alt="" width='150px' />
               <h2>open the form and fill the data </h2>
            </div>
            <div className='part-one' style={{ display: 'flex', width: '170px', flexDirection: 'column' }}>
               <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZKOWOyK0Avzc9DEyVDnS9a3ijitXtcK8FIA&usqp=CAU' alt="" width='150px' />
               <h2>choose a template and download or share  </h2>
            </div>
         </div>
         <div className='whats-good-cont'>
                 <h1>Why use CVConnect</h1>
                  <h4 style={{width:'650px',textAlign:'center'}}>Free Access: One of the most significant advantages of the website is that it offers its services completely free of charge. This means users can create, edit, and download their CVs without any hidden fees or subscriptions. It provides an accessible and budget-friendly </h4>
                  <img src="https://www.myperfectresume.com/wp-content/uploads/2022/10/resume-format-illustration.svg" alt="" width='522px'/>
         </div>
      </div>
   )
}

export default Homepage
