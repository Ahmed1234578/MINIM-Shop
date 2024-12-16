var mv=require('method-override')
const express = require('express')
const app = express()
const port = 8080
const mongoose = require('mongoose');
app.use(express.json())
const User=require("./models/mydataSchema")
const Device=require("./models/devicesSchema")
app.use(mv('_method'))
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));
mongoose.connect('mongodb+srv://ahmed2134:iLP24YewekpvkFe6@cluster0.dnjw4bw.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0').
then(() => {
  app.listen(port, () => {
    console.log(`http://localhost:8080/`)
  })
}).
catch((err) => {console.log(err)});
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.render("Home", {})
})
const db=mongoose.connection;
const path = require("path");
const livereload=require("livereload");
const livereloadSerever=livereload.createServer();
livereloadSerever.watch(path.join(__dirname, '/public'));
const connectLive =require("connect-livereload");
const { array } = require('i/lib/util');
app.use(connectLive());
livereloadSerever.server.once("connection", ()=> {
  setTimeout(() => {
    livereloadSerever.refresh('/');
  }, 100);
});
app.get('/views/LoginForm.ejs', (req, res) => {
 
      res.render("LoginForm")
     })
   app.get('/views/RegisterationForm.ejs', (req, res) => {
 
     res.render("RegisterationForm")
    })
    app.get('/views/UserPage.ejs', (req, res) => {
 
     res.render("UserPage")
    })
    app.get('/views/AdminPage.ejs', (req, res) => {
 
     res.render("AdminPage")
    })
    app.get('/views/Home.ejs', (req, res) => {
 
     res.render("Home")
    })
    app.get('/views/UserProfile.ejs', (req, res) => {
 
     res.render("UserProfile")
    })
    
    app.get('/views/AddDevice.ejs', (req, res) => {
 
     res.render("AddDevice")
    })
    app.get('/views/DeleteDevice.ejs', (req, res) => {
 
     res.render("DeleteDevice")
    })
    app.post('/views/UserPage.ejs', upload.single('Photo'), (req, res) => {
     
      if (!req.file) { return res.status(400).send('No file uploaded.'); }
     const user= new User(
      {
        FullName:req.body.FullName,
        Email: req.body.Email,
        Address:req.body.Address,
        Password:req.body.Password,
        ScreenSpace:req.body.ScreenSpace,
        Photo: {
          data: req.file.buffer,
          contentType: req.file.mimetype,
        },

      },
     );
      
      user.save().then(() => {
    
        res.render("UserPage")
      }).catch((err) => {
        console.log(err);
      })
     
     
     })
     app.post('/views/AdminPage.ejs', upload.single('Photo'), (req, res) => {
      if (!req.file) {
        return res.status(400).send('No file uploaded.');
      }
    
      const newDevice = new Device({
        Name: req.body.Name,
        Price: req.body.Price,
        Description: req.body.Description,
        RAM: req.body.RAM,
        ScreenSpace: req.body.ScreenSpace,
        image: {
          data: req.file.buffer,
          contentType: req.file.mimetype,
        },
      });
    
      newDevice.save().then(() => {
        res.render("AdminPage");
      }).catch((err) => {
        console.log(err);
        res.status(500).send('Error saving device.');
      });
    });
    

     app.get('/views/summary.ejs', (req, res) => {
 
      res.render("summary")
     })
    
    app.get('/views/Home.ejs', (req, res) => {
 
     res.render("Home")
    })
    app.get('/views/DeleteUser.ejs', (req, res) => {
 
     res.render("DeleteUser")
    })

    app.get('/views/EditProfileUser.ejs', (req, res) => {
 
     res.render("EditProfileUser")
    })
    app.get('/views/AddanAdmin.ejs', (req, res) => {
 
     res.render("AddanAdmin")
    })
    app.get('/views/Profile.ejs', (req, res) => {
 
     res.render("Profile")
    })
    app.get('/views/EditProfile.ejs', (req, res) => {
 
     res.render("EditProfile")
    })
 



app.post('/', (req, res) => {
  console.log(req.body)
  const Mydata_article=new Mydata(req.body)
  Mydata_article.save().then(() => {
    
 res.redirect("/")
  }).catch((err) => {
    console.log(err);
  })
  
})


 app.get('/views/Users.ejs', (req, res) => {
  User.find().then((result) => {
    
    res.render("Users", {arr: result})
    res.end();
  }).catch((err) => {
    console.log(err);
  })

 })
 app.get('/views/Devices.ejs', async(req, res) => {
     
     Device.find().then((result) => {
   
    res.render('Devices', {arr: result})
  
  })
 })
 app.get('/views/ManageDevices.ejs', async(req, res) => {
     
  Device.find().then((result) => {

 res.render('ManageDevices', {arr: result})

})
})
 app.get('/views/ViewUser.ejs/:id', (req, res) => {
  User.findById(req.params.id).then((result) => {
    res.render('ViewUser', {arr: result})
   
  }).catch((err) => {
    console.log(err);
  })
 
 })
 app.get('/views/Device.ejs/:id', (req, res) => {
  Device.findById(req.params.id).then((result) => {
    res.render('Device', {arr: result})
   
  }).catch((err) => {
    console.log(err);
  })
 
 })
 app.get('/views/EditDevice.ejs/:id', (req, res) => {
  Device.findById(req.params.id).then((result) => {
    res.render('EditDevice', {arr: result})
   
  }).catch((err) => {
    console.log(err);
  })
 
 })
 app.get('/views/EditUser.ejs/:id', (req, res) => {
  User.findById(req.params.id).then((result) => {
    res.render('EditUser', {arr: result})
   
  }).catch((err) => {
    console.log(err);
  })
 
 })
 app.put('/views/EditUser.ejs/:id', upload.single('Photo'), (req, res) => {
  const updatedData = {
    FullName:req.body.FullName,
    Email: req.body.Email,
    Address:req.body.Address,
    Password:req.body.Password,
    ScreenSpace:req.body.ScreenSpace,
    Photo: {
      data: req.file.buffer,
      contentType: req.file.mimetype,
    },
  };

  if (req.file) {
    updatedData.Photo = {
      data: req.file.buffer,
      contentType: req.file.mimetype,
    };
  }

  User.findByIdAndUpdate(req.params.id, updatedData, { new: true }).then((result) => {
    res.redirect("/views/Users.ejs");
  }).catch((err) => {
    console.log(err);
    res.status(500).send('Error updating user profile.');
  });
});

 app.post('/views/EditProfileUser.ejs/:id', (req, res) => {
  User.findById(req.params.id).then((result) => {
    res.render('UserPage', {arr: result})
   
  }).catch((err) => {
    console.log(err);
  })
 
 })
 app.delete('/views/Users.ejs/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id).then(() => {
    res.redirect('/views/Users.ejs')
   
  }).catch((err) => {
    console.log(err);
  })
 
 })
 app.delete('/views/ManageDevices.ejs/:id', (req, res) => {
  Device.findByIdAndDelete(req.params.id).then(() => {
    res.redirect('/views/ManageDevices.ejs')
   
  }).catch((err) => {
    console.log(err);
  })
 
 })
 app.get('/device-images/:id', async (req, res) => {
  try {
    const device = await Device.findById(req.params.id);
    if (!device || !device.image) {
      return res.status(404).send('Device image not found');
    }
    res.contentType(device.image.contentType);
    res.send(device.image.data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});
app.get('/user-images/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user || !user.Photo) {
      return res.status(404).send('User image not found');
    }
    res.contentType(user.Photo.contentType);
    res.send(user.Photo.data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});
