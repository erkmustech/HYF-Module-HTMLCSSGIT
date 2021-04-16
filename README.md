<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: arial, sans-sarf;
}

.body {
  display: grid;
  grid-template-rows: 100px minmax(400px, min-content) 50px;
  grid-template-columns: 5rem [cal-start]repeat(2, minmax(250px, 1fr)) [cal-end] 5rem;
  justify-content: center;
  grid-gap: 20px;
  align-items: center;
  font-size: 14px;
}

.header {
  grid-column: 1 / -1;
  background-color: #2a3a7d;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .logo-box {
    flex: 1;
    display: flex;
    min-width: 250px;
    height: 20vh;
    align-items: center;
    justify-content: center;
    img {
      height: 12vh;
    }
  }
  input{
    height:40px;
    width:200px;
    padding:5px auto;
    margin-right:10px;
    
  }

  .sign-in {
    min-width: 250px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
  }

  button {
    width: 100px;
    height: 40px;
    color: #fff;
    font-size: 16px;
    background-color: orange;
    padding: 5px auto;
  }
}

main {
  grid-row: 2 / span 1;
  grid-column: cal-start / cal-end;
  margin: 30px 5vw;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-column-gap: 20px;

  .weeks {
    background-color: orange;
    padding: 30px 20px;
    display: grid;
    margin-top: 20px;
    align-items: center;
    justify-items: center;
    text-align: center;
    transition: all 0.3s;

    & > * {
      align-items: center;
      justify-items: center;
    }
    img {
      width: 50%;
    }

    h3 {
      color: #2a3a7d;
      text-transform: uppercase;
    }

    p {
      font-size: 14px;
      opacity: 1;
      text-decoration: none;
      text-align: center;
      line-height: 0px;
    }

    a,
    :after,
    :visited {
      text-decoration: none;
      color: #777;
      transition: all 0.2s ease;
    }
  }

    .weeks:hover {
      opacity: 0.6;
    }
}

.footer {
  background-color: #2a3a7d;
  grid-column: 1 /-1;
  color: #fff;
  font-size: 12px;
  margin-top: 20px;
  text-align: center;
  height: 10vh;
  padding-top: 10px;
}
</style>
</head>

<body>
  <div class="box header">
    <div class="logo-box"><img src="https://i.postimg.cc/pTPJTRDp/hyf2.png" alt="" class="logo"></div>
    <div class="sign-in">
      <input type="email" placeholder="inter your email">
      <input type="password" placeholder="passord">
      <button class="btn">login</button>
    </div>
  </div>

  <main class="main box">
    
    <div class="weeks week3"><a href="https://github.com/erkmustech/HYF-Module-HTMLCSSGIT/tree/main/Week1">
  
        <img src="https://i.postimg.cc/pTPJTRDp/hyf2.png" alt="" class="hyf-icon">

      
      <h3 class="weeks__heading">Week 1</h3>
      <p class="weeks__text">
        class contents
      </p></a>
    </div>

    <div class="weeks week2"><a href="https://github.com/erkmustech/HYF-Module-HTMLCSSGIT/tree/main/Week2">
    
        <img src="https://i.postimg.cc/pTPJTRDp/hyf2.png" alt="https://github.com/erkmustech/HYF-Module-HTMLCSSGIT/tree/main/Week2" class="hyf-icon">
   
      
      <h3 class="weeks__heading">Week 2</h3>
      <p class="weeks__text">
        class contents
      </p></a>
    </div>

    <div class="weeks week3">
   
        <img src="https://i.postimg.cc/pTPJTRDp/hyf2.png" alt="" class="hyf-icon">
     
      <h3 class="weeks__heading">Week 3</h3>
      <p class="weeks__text">
        class contents
      </p>
    </div>

    <div class="weeks week4">
      <img src="https://i.postimg.cc/pTPJTRDp/hyf2.png" alt="" class="class-icon">
      <h3 class="weeks__heading">Week 4</h3>
      <p class="weeks__text">
        class contents
      </p>
    </div>

    <div class="weeks week5">
      <img src="https://i.postimg.cc/pTPJTRDp/hyf2.png" alt="" class="class-icon">
      <h3 class="weeks__heading">Week 5</h3>
      <p class="weeks__text">
        class contents
      </p>
    </div>
    <div class="weeks week5">
      <img src="https://i.postimg.cc/pTPJTRDp/hyf2.png" alt="" class="class-icon">
      <h3 class="weeks__heading">Week 6</h3>
      <p class="weeks__text">
        class contents
      </p>
    </div>

    <div class="weeks week4">
      <img src="https://i.postimg.cc/pTPJTRDp/hyf2.png" alt="" class="class-icon">
      <h3 class="weeks__heading">Week 7</h3>
      <p class="weeks__text">
        class contents
      </p>
    </div>
    <div class="weeks week5">
      <img src="https://i.postimg.cc/pTPJTRDp/hyf2.png" alt="" class="class-icon">
      <h3 class="weeks__heading">Week 8</h3>
      <p class="weeks__text">
        class contents
      </p>
    </div>

    <div class="weeks week4">
      <img src="https://i.postimg.cc/pTPJTRDp/hyf2.png" alt="" class="class-icon">
      <h3 class="weeks__heading">Week 9</h3>
      <p class="weeks__text">
        class contents
      </p>
    </div>
    <div class="weeks week5">
      <img src="https://i.postimg.cc/pTPJTRDp/hyf2.png" alt="" class="class-icon">
      <h3 class="weeks__heading">Week 10</h3>
      <p class="weeks__text">
        class contents
      </p>
    </div>

    <div class="weeks week4">
      <img src="https://i.postimg.cc/pTPJTRDp/hyf2.png" alt="" class="class-icon">
      <h3 class="weeks__heading">Week 11</h3>
      <p class="weeks__text">
        class contents
      </p>
    </div>
    <div class="weeks week5">
      <img src="https://i.postimg.cc/pTPJTRDp/hyf2.png" alt="" class="class-icon">
      <h3 class="weeks__heading">Week 12</h3>
      <p class="weeks__text">
        class contents
      </p>
    </div>

    <div class="weeks week4">
      <img src="https://i.postimg.cc/pTPJTRDp/hyf2.png" alt="" class="class-icon">
      <h3 class="weeks__heading">Week 13</h3>
      <p class="weeks__text">
        class contents
      </p>
    </div>
    <div class="weeks week5">
      <img src="https://i.postimg.cc/pTPJTRDp/hyf2.png" alt="" class="class-icon">
      <h3 class="weeks__heading">Week 14</h3>
      <p class="weeks__text">
        class contents
      </p>
    </div>

    <div class="weeks week4">
      <img src="https://i.postimg.cc/pTPJTRDp/hyf2.png" alt="" class="class-icon">
      <h3 class="weeks__heading">Week 15</h3>
      <p class="weeks__text">
        class contents
      </p>
    </div>
    <div class="weeks week5">
      <img src="https://i.postimg.cc/pTPJTRDp/hyf2.png" alt="" class="class-icon">
      <h3 class="weeks__heading">Week 16</h3>
      <p class="weeks__text">
        class contents
      </p>
    </div>

    <div class="weeks week4">
      <img src="https://i.postimg.cc/pTPJTRDp/hyf2.png" alt="" class="class-icon">
      <h3 class="weeks__heading">Week 17</h3>
      <p class="weeks__text">
        class contents
      </p>
    </div>
    <div class="weeks week5">
      <img src="https://i.postimg.cc/pTPJTRDp/hyf2.png" alt="" class="class-icon">
      <h3 class="weeks__heading">Week 18</h3>
      <p class="weeks__text">
        class contents
      </p>
    </div>

    <div class="weeks week4">
      <img src="https://i.postimg.cc/pTPJTRDp/hyf2.png" alt="" class="class-icon">
      <h3 class="weeks__heading">Week 19</h3>
      <p class="weeks__text">
        class contents
      </p>
    </div>
    <div class="weeks week5">
      <img src="https://i.postimg.cc/pTPJTRDp/hyf2.png" alt="" class="class-icon">
      <h3 class="weeks__heading">Week 20</h3>
      <p class="weeks__text">
        class contents
      </p>
    </div>

    <div class="weeks week4">
      <img src="https://i.postimg.cc/pTPJTRDp/hyf2.png" alt="" class="class-icon">
      <h3 class="weeks__heading">Week 21</h3>
      <p class="weeks__text">
        class contents
      </p>
    </div>
    <div class="weeks week5">
      <img src="https://i.postimg.cc/pTPJTRDp/hyf2.png" alt="" class="class-icon">
      <h3 class="weeks__heading">Week 22</h3>
      <p class="weeks__text">
        class contents
      </p>
    </div>

    <div class="weeks week4">
      <img src="https://i.postimg.cc/pTPJTRDp/hyf2.png" alt="" class="class-icon">
      <h3 class="weeks__heading">Week 23</h3>
      <p class="weeks__text">
        class contents
      </p>
    </div>
    <div class="weeks week5">
      <img src="https://i.postimg.cc/pTPJTRDp/hyf2.png" alt="" class="class-icon">
      <h3 class="weeks__heading">Week 24</h3>
      <p class="weeks__text">
        class contents
      </p>
    </div>

    <div class="weeks week4">
      <img src="https://i.postimg.cc/pTPJTRDp/hyf2.png" alt="" class="class-icon">
      <h3 class="weeks__heading">Week 25</h3>
      <p class="weeks__text">
        class contents
      </p>
    </div>
    <div class="weeks week5">
      <img src="https://i.postimg.cc/pTPJTRDp/hyf2.png" alt="" class="class-icon">
      <h3 class="weeks__heading">Week 26</h3>
      <p class="weeks__text">
        class contents
      </p>
    </div>

    <div class="weeks week4">
      <img src="https://i.postimg.cc/pTPJTRDp/hyf2.png" alt="" class="class-icon">
      <h3 class="weeks__heading">Week 27</h3>
      <p class="weeks__text">
        class contents
      </p>
    </div>
    <div class="weeks week5">
      <img src="https://i.postimg.cc/pTPJTRDp/hyf2.png" alt="" class="class-icon">
      <h3 class="weeks__heading">Week 28</h3>
      <p class="weeks__text">
        class contents
      </p>
    </div>

  </main>

  <div class="box footer"> @erk.mustech 2021 </div>

</body>

</html>
