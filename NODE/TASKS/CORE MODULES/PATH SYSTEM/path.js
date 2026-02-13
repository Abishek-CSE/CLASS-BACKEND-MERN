import path from 'path'

const foldername ='Uploads'
const file = 'Content.txt'
const storgae1 =path.join(foldername,file)
console.log(storgae1);
const abs =path.resolve()
console.log(abs);
const extension =path.extname("Context.txt")
console.log(extension);
const assd =path.basename("Context.txt")
console.log(assd);

