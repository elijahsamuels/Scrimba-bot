import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import fs from 'fs'
import util from 'util'

try {
   const readFile = util.promisify(fs.readFile)
   const text = await readFile('./scrimba-info.txt', 'utf8')
   const splitter = new RecursiveCharacterTextSplitter({
       chunkSize: 500,
       chunkOverlap: 50,
       separators: ['\n\n', '\n', ' ', ''] // default setting
   })
   
   const output = await splitter.createDocuments([text])
   
	 const sbApiKey = process.env.SUPABASE_API_KEY
	 const sbUrl = process.env.SUPABASE_URL_LC_CHATBOT
	 const openAIApiKey = process.env.OPENAI_API_KEY



  //  console.log(output)
} catch (err) {
   console.log(err)
}
