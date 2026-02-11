import path from 'path'

//join = foldername,filename
const foldername ="uploads"
const filename="Content.txt"
const result =path.join(foldername,filename)
console.log(result);

//absolute path => full directory or full path
const absolutepathfile = path.resolve('Content.txt')
console.log(absolutepathfile);

//file Extension
const fileextension =path.extname("Content.txt")
console.log(fileextension);

//Take FileName
const takefile =path.basename("Content.txt")
console.log(takefile);

