const express = require('express');
const router = express.Router();
const Post  = require('../model/Post');
const Board = require('../model/Board')
const Search = require('../model/Search')
const fetch = require("node-fetch");
const request = require('request');
const secretKey = process.env.secretKey;
const counterPsw = process.env.counterPsw;


router.get('/', async (req, res) => {
  try {fetch(`https://api.countapi.xyz/update/maslabook/${counterPsw}?amount=1`);} catch(e) {console.log("Error en el contador: " + e)}
  //console.log(req);
  const posts = await Post.find({ $and: [{"socialNet":"fb"}, {"year":2048}]}).limit(11);
  posts.push({'lasty': ''});
  res.render('index', {posts} );
});


router.post('/search', async (req, res, next) => {

  try {
    const obj = JSON.parse(JSON.stringify(req.body));  //redundante

    // if (req.body.g-recaptcha-response === undefined || req.body.g-recaptcha-response === '' || req.body.g-recaptcha-response === null) {
    //   return res.json({"success": false, "msg": "Captcha no seleccionado"});
    // }
  
    const secretKey = process.env.secretKey;
    const respon = obj['g-recaptcha-response'];
  
    const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${respon}&remoteip=${req.connection.remoteAddress}`;
  
    request(verifyURL, (err, response, body) => {
      body = JSON.parse(body);
      if (body.success != undefined && !body.success) {
        return res.json({"success": false, "msg": "Captcha no verificado"});
      } else {
        seguir();
      };
    });
  
    async function seguir() {
      var wordsBrute = req.body.words.trim() || '';
      console.log("...wordsBrute... " + wordsBrute)
      var words = []
      words = wordsBrute.split(' ');
      console.log("...words... " + words)

      require('./searching');
      let coleccion = crearColeccion(words);


      var c2009 = req.body.c2009 || '';
      var c2010 = req.body.c2010 || '';
      var c2011 = req.body.c2011 || '';
      var c2012 = req.body.c2012 || '';
      var c2013 = req.body.c2013 || '';
      var c2014 = req.body.c2014 || '';
      var c2015 = req.body.c2015 || '';
      var c2016 = req.body.c2016 || '';
      var c2017 = req.body.c2017 || '';
      var c2018 = req.body.c2018 || '';
      var c2019 = req.body.c2019 || '';
      var c2020 = req.body.c2020 || '';
    
      years = []
      if (c2009 != "") {years.push(c2009);}
      if (c2010 != "") {years.push(c2010);}
      if (c2011 != "") {years.push(c2011);}
      if (c2012 != "") {years.push(c2012);}
      if (c2013 != "") {years.push(c2013);}
      if (c2014 != "") {years.push(c2014);}
      if (c2015 != "") {years.push(c2015);}
      if (c2016 != "") {years.push(c2016);}
      if (c2017 != "") {years.push(c2017);}
      if (c2018 != "") {years.push(c2018);}
      if (c2019 != "") {years.push(c2019);}
      if (c2020 != "") {years.push(c2020);}
    
      var queryYears = []
      for (i=0; i<years.length; i++) {
        queryYears.push({
          'year'   :   years[i]
        })
      }
      //console.log(queryYears)
    
      var m01 = req.body.m01 || '';
      var m02 = req.body.m02 || '';
      var m03 = req.body.m03 || '';
      var m04 = req.body.m04 || '';
      var m05 = req.body.m05 || '';
      var m06 = req.body.m06 || '';
      var m07 = req.body.m07 || '';
      var m08 = req.body.m08 || '';
      var m09 = req.body.m09 || '';
      var m10 = req.body.m10 || '';
      var m11 = req.body.m11 || '';
      var m12 = req.body.m12 || '';
    
      months = []
      if (m01 != "") {months.push(m01);}
      if (m02 != "") {months.push(m02);}
      if (m03 != "") {months.push(m03);}
      if (m04 != "") {months.push(m04);}
      if (m05 != "") {months.push(m05);}
      if (m06 != "") {months.push(m06);}
      if (m07 != "") {months.push(m07);}
      if (m08 != "") {months.push(m08);}
      if (m09 != "") {months.push(m09);}
      if (m10 != "") {months.push(m10);}
      if (m11 != "") {months.push(m11);}
      if (m12 != "") {months.push(m12);}
    
      var queryMonths = []
      for (i=0; i<months.length; i++) {
        queryMonths.push({
          'month'   :   months[i]
        })
      }
      //console.log(queryMonths)
    
    
      const socialnet = req.body.socialnet;
      //console.log("SOCIAL NET: " + socialnet)
      socialN = []
      if (socialnet == "justFb") {
        socialN.push("fb")
      } else if (socialnet == "justTw") {
        socialN.push("tw")
      } else {
        socialN.push("fb")
        socialN.push("tw")
      }
      var querySnets = []
      for (i=0; i<socialN.length; i++) {
        querySnets.push({
          'socialNet'   :   socialN[i]
        })
      }
      //console.log(querySnets)
    
      var twIgnore = req.body.twIgnore || '';
      //console.log("Tw ignore:" +twIgnore)
    
      //     $or: queryMonths




      // queryWords = { $or: coleccion[0], $or: coleccion[1], $or: coleccion[2] }
      // console.log("QueryWords:", queryWords)


      objJSON = {}
      if (twIgnore == "on") {
        objJSON = {
                    $and: [{
                            $and: [{
                                    $and: [{
                                            $and: [{  
                                                    $and: [{
                                                            $and: [{
                                                                    $and: [{
                                                                            $and: [{
                                                                                    $and: [{
                                                                                            $and: [{
                                                                                                    $and: [{
                                                                                                            $or: coleccion[0]
                                                                                                          }],
                                                                                                          $or: coleccion[1],
                                                                                                  }],
                                                                                                  $or: coleccion[2],
                                                                                          }],
                                                                                          $or: coleccion[3],
                                                                                  }],
                                                                                  $or: coleccion[4],
                                                                            }],
                                                                            $or: coleccion[5]
                                                                    }],
                                                                    $or: coleccion[6]
                                                          }],
                                                          $or: queryYears
                                                  }],
                                            $or: [{ $or: querySnets }] 
                                    }],
                                    $or: queryMonths
                            }],
                            $or:  [{  
                                    $or: [{'user': 'Carlos Maslaton'}, {'user': 'CarlosMaslaton'}]
                            }],
                        }]
                  }
      } else {
        objJSON = {
                    $and: [{
                            $and: [{
                                    $and: [{
                                            $and: [{
                                                    $and: [{
                                                            $and: [{
                                                                    $and: [{
                                                                            $and: [{
                                                                                    $and: [{
                                                                                            $and: [{
                                                                                                    $or: coleccion[0]
                                                                                                  }],
                                                                                                  $or: coleccion[1],
                                                                                          }],
                                                                                          $or: coleccion[2],
                                                                                  }],
                                                                                  $or: coleccion[3],
                                                                          }],
                                                                          $or: coleccion[4],
                                                                  }],
                                                                  $or: coleccion[5]
                                                        }],
                                                        $or: coleccion[6]
                                                }],
                                            $or: queryYears
                                          }],
                                    $or:  [{ $or: querySnets }]
                            }],
                            $or: queryMonths 
                    }]
                  }
        //console.log("without 3rd tw")
      }
    
      //console.log(objJSON)
      let limit = 30
    
      let timeSearch = parseInt(new Date().getTime())
      var busqueda = {timestamp:timeSearch, palabras:words, anyos:years, meses:months, redes:socialN, ignorar:twIgnore}
    
      if (queryYears[0] != null && queryMonths[0] != null) {
        try{await Search.create(busqueda)} catch(e) {console.log("Error al almacenar búsqueda: " + e)}
        var posts = await Post.find(objJSON).limit(limit).sort({'timest': 1});

        let buscado = '';
        for (i=0; i<words.length-1; i++) {
          buscado += words[i] + " ";
        }
        buscado += words[words.length-1]

        console.log("BUSCADO: " + buscado)
        posts.push({'lasty': buscado});
        
        res.render('index', {posts} );
      } else {
        var posts = await Post.find({ $and: [{"socialNet":"fb"}, {"year":2048}]}).limit(1);
        let buscado = ''
        posts.push({'lasty': buscado});
        res.render('index', {posts} );
      }
    };
    
  } catch (e) {
    console.log(e);
  }

});


////////////////////////////////////////////////////////////////////////////////////////


router.get('/maslastory', async (req, res) => {
  try {fetch(`https://api.countapi.xyz/update/maslastory/${counterPsw}?amount=1`);} catch(e) {console.log("Error en el contador: " + e)}
  res.render('maslastory');
});


router.get('/maslaboard', async (req, res) => {
  try {fetch(`https://api.countapi.xyz/update/maslaboard/${counterPsw}?amount=1`);} catch(e) {console.log("Error en el contador: " + e)}
  const boards = await Board.find().limit(50).sort({timeBoard:-1});
  res.render('maslaboard', {boards})
});

router.post('/maslaboard', async (req, res) => {
  console.log(req.body);
  try {
    const obj = JSON.parse(JSON.stringify(req.body));
    const respon = obj['g-recaptcha-response'];

    const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${respon}&remoteip=${req.connection.remoteAddress}`;

    request(verifyURL, (err, response, body) => {
      body = JSON.parse(body);
      console.log(body);

      if (body.success != undefined && !body.success) {
        return res.json({"success": false, "msg": "Captcha no verificado"});
      } else {
        seguir();
      }
    });

    async function seguir() {
      let nombreBoard = req.body.nombreBoard;
      let postBoard = req.body.postBoard;
      let timeBoard = parseInt(new Date().getTime())
      let ip = req.body.json1;
      let city = req.body.json2;
      let country = req.body.json3;
      let latitude = req.body.json4;
      let longitude = req.body.json5;
      console.log(nombreBoard, postBoard, timeBoard)
      let board = {
        nombreBoard,
        postBoard,
        timeBoard,
        ip,
        city,
        country,
        latitude,
        longitude
      }
      try {
        if (nombreBoard != "" && nombreBoard.length<25 && postBoard != "" && postBoard.length<1400 && nombreBoard.indexOf('script')==-1 && postBoard.indexOf('script')==-1) {
          await Board.create(board);
        }
      } catch (err) {
        console.log("Error: " + err)
      }
      const boards = await Board.find().limit(50).sort({timeBoard:-1});
      res.render('maslaboard', {boards});
    };
  } catch(e) {
    console.log(e);
  }
});


router.get('/maslazoom', (req, res) => {
  try {fetch(`https://api.countapi.xyz/update/maslazoom/${counterPsw}?amount=1`);} catch(e) {console.log("Error en el contador: " + e)}
  // res.set("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
  res.render('maslazoom');
});

// router.get('/maslanomics', (req, res) => {
//   try {fetch(`https://api.countapi.xyz/update/maslanomics/${counterPsw}?amount=1`);} catch(e) {console.log("Error en el contador: " + e)}
//   res.render('maslanomics');
// });


router.get('/counter', async (req, res) => {

  json = []

  await fetch(`https://api.countapi.xyz/get/maslabook/${counterPsw}`)
  .then(resp => {
    const resX = resp.json();
    return resX
  }).then(resX => {
    json.push( {'counter': resX.value} )
    //console.log(resX.value);
  });

  await fetch(`https://api.countapi.xyz/get/maslastory/${counterPsw}`)
  .then(resp => {
    const resX = resp.json();
    return resX
  }).then(resX => {
    json.push( {'counter': resX.value} )
    //console.log(resX.value);
  });

  await fetch(`https://api.countapi.xyz/get/maslaboard/${counterPsw}`)
  .then(resp => {
    const resX = resp.json();
    return resX
  }).then(resX => {
    json.push( {'counter': resX.value} )
    //console.log(resX.value);
  });

  await fetch(`https://api.countapi.xyz/get/maslazoom/${counterPsw}`)
  .then(resp => {
    const resX = resp.json();
    return resX
  }).then(resX => {
    json.push( {'counter': resX.value} )
    //console.log(resX.value);
  });

  await fetch(`https://api.countapi.xyz/get/maslanomics/${counterPsw}`)
  .then(resp => {
    const resX = resp.json();
    return resX
  }).then(resX => {
    json.push( {'counter': resX.value} )
    //console.log(resX.value);
  });

  console.log(json);
  res.render('counter', {json});
})




module.exports = router;


// router.post('/add', async (req, res, next) => {
//   const post = new Post(req.body);
//   await post.save();
//   res.redirect('/');
// });

// router.get('/turn/:id', async (req, res, next) => {
//   let { id } = req.params;
//   const post = await Post.findById(id);
//   post.status = !post.status;
//   await post.save();
//   res.redirect('/');
// });

// router.get('/delete/:id', async (req, res, next) => {
//   let { id } = req.params;
//   await Task.remove({_id: id});
//   res.redirect('/');
// });


//router.get('/search', async (req, res, next) => {
//  var wordsBrute = req.params.words || ''; funcionaba con get en frontend
