*{
    margin: 0;
    padding: 0;
}
.logo{
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.logo img{
    width: 33%;
    border-color: aliceblue;
    border-radius: 40%;
}
.navbar{
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    cursor: pointer;
}
.nav-list{
  width: 50%;
  /* background-color: yellow; */
  display: flex;
  align-items: center;
  }

.nav-list li{
 list-style: none;
 padding: 26px 30px;
}

.nav-list li a{
 text-decoration: none;
 color:black;
}
.nav-list li a:hover{
    color:gray;
   }
.rightNav{
    /* background-color: blue; */
    width: 50%;
    text-align: right;
    padding: 26px 30px;
