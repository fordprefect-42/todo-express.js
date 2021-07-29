const express=require('express')

const app=express()

app.use(express.urlencoded({extended:true}))
app.set('view engine','hbs')
tasks=[
    'task1'
    ]
app.get("/",(req,res)=>
{
    res.render('home',{
        title:'Todo List',
        tasks
    })
})

app.post("/",(req,res)=>
{
   tasks.push(req.body.newtask)
   res.redirect('/')
})

app.listen(5555,()=>
{
    console.log("The server has been started at http://localhost:5555")
})