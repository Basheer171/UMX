// const isLogin = async(req,res,next)=>{

//     try {

//         if(req.session.user_id){}
//         else{
//             res.redirect('/')
//         }
//         next();
        
//     } catch (error) {
//         console.log(error.message);
//     }
// }



// const isLogout = async(req,res,next)=>{

//     try {
        

//         if(req.session.user_id){}
//         else{
//             res.redirect('/home')
//         }
//         next();

//     } catch (error) {
//         console.log(error.message);
//     }
// }

// module.exports = {
//     isLogin,
//     isLogout
// }


// Dasappan.....

// const isLogin = async (req, res, next) => {
//     try {
//         if (req.session.user_id) {
//             next();
//         } else {
//             res.redirect('/');
//         }
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).send('Server Error');
//     }
// }

// const isLogout = async (req, res, next) => {
//     try {
//         if (req.session.user_id) {
//             res.redirect('/home');
//         } else {
//             next();
//         }
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).send('Server Error');
//     }
// }

// module.exports = {
//     isLogin,
//     isLogout
// }

// chatgpt

const isLogin = async (req, res, next) => {
    try {
        if (req.session.user_id) {
            next();
        } else {
            res.redirect('/');
        }
    } catch (error) {
        console.log(error.message);
    }
}

const isLogout = async (req, res, next) => {
    try {
        if (!req.session.user_id) {
            next();
        } else {
            res.redirect('/home');
        }
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    isLogin,
    isLogout
}
