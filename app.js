import React from 'react';
import './App.css';

function App() {
  const data = [
    {
          url : "https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg",
          title : "Fresh Graduate or IT Professional Looking for a...",
          author : "Narendra Modi",
          date : "05 Jul 2019",
          description : "If you are a fresh Graduate Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor"
    },
    {
          url : "https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg",
          title : "Fresh Graduate or IT Professional Looking for a...",
          author : "Narendra Modi,
          date : "05 Jul 2019",
          description : "If you are a fresh Graduate Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor"
    },
    {
          url : "https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg",
          title : "Fresh Graduate or IT Professional Looking for a...",
          author : "Narendra Modi",
          date : "05 Jul 2019",
          description : "If you are a fresh Graduate Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor"
    },
    {
          url : "https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg",
          title : "Fresh Graduate or IT Professional Looking for a...",
          author : "Narendra Modi",
          date : "05 Jul 2019",
          description : "If you are a fresh Graduate Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor"
    }
  ]

  // const Card = (stories) => <div className=""


  return (
    <div className="App">
      <header>
        <div className="left">
          <div className='logo-div'>
            <img className="logo" src="https://s3-ap-southeast-1.amazonaws.com/internshala-uploads/google_logo/5f195133ee39e1595494707.png"/>
            <p className="stories">Stories</p>
          </div>
          <div className="explore">
            <p>Explore Categories</p>
            <i class="fas fa-angle-down"></i>
          </div>
        </div>
        <div className="right">
          <div className="text">
            <p>EdYoda is free learning and knowledge
                sharing platform for techies</p>
          </div>
          <div class="main-button">
            <a href="https://www.edyoda.com"><button className="goto-btn">Go To Main Website</button></a>
          </div>
        </div>
      </header>
      
      <div className="container">
        <div className="stories">
          <div className="card">
            <img src= {data[0].url} title="First Job" className="thumbnail"/>
            <h3>{data[0].title}</h3>
            <h5>{data[0].author} | {data[0].date}</h5>
            <p>{data[0].description}</p>

          </div>
        </div>
      </div>


      
    </div>
  );
}

export default App;