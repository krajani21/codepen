### HTML CODE
```
<div class="profile-card">
  <div class="info">
    <h1>Template person</h1>
    <a href="w3schools.com" target="_blank">w3schools.com</a>
  </div>
  <div class="profile-pic">
    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Template person">
  </div>
</div>
```

### CSS CODE
/*

- Create a card UI similar to the image using HTML and CSS
- It doesn't need to be an exact replica
- You can use any name, photo, URL

*/
.profile-card{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  width: 250px;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 1);
  font-family: sans-serif;
  border: 1px solid; 
  margin-top: 25px;
  margin-left: 25px;
}

.info{
  text-align: left;
}

.info h1{
  margin: 0;
  font-size: 1rem;
  color: #000;
}

.profile-pic img{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  display:block;
  border: 1px solid;
}

