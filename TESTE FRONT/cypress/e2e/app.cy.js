class RegistroForm{
elements = {
  titleInput:()=> cy.get('#title'),
  titleFeedback:()=> cy.get('#titleFeedback'),
  imageUrlInput:()=>cy.get('#imageUrl'),
  imageUrlInputFeedback:()=>cy.get('#urlFeedback'),
  submitBtn:()=>cy.get('#btnSubmit'),
}
clickSubmit(){
  this.elements.submitBtn().click()
}
 typeTitle(text){
  if(!text)return;
  this.elements.titleInput().type(text)
 }
typeUrl(url){
  if(!url)return;
  this.elements.imageUrlInput().type(url)
 }
}

const registroForm = new RegistroForm();

describe('Registro de imagem',()=>{
  describe('Enviar uma imagem com entradas invalidas',() =>{
    const imagem = {
  titulo:'',
 url:''
    }
  it('Estou na pagina de cadastro de imagem ', ()=>{
    cy.visit('/')
  })  
  it(`Quando eu digito "${imagem.titulo}"no  campo do titulo`,()=>{
    registroForm. typeTitle(imagem.titulo)
  })
  it(`Quando eu digito "${imagem.url}"no  campo do URL`,()=>{
    registroForm.typeUrl(imagem.url)
  })
  it('Eu clico no botao de envio',()=>{
    registroForm.clickSubmit()
  })
  it('Entao eu devo ver a mensagem "Please type a title for the image"acima do campo de titulo',()=>{
    registroForm.elements.titleFeedback().should("contain.text","Please type a title for the image")
  })
it('E eu devo ver a mensagem"Please type a valis URL"acimado campo de URL da image',()=> {
   registroForm.elements.imageUrlInputFeedback().should("contain.text","Please type a valid URL")
})
    
  })
describe('Enviar uma imagem com entradas invalidas',() =>{
  const imagem = {
    titulo:'banana',
    url:'https://frutasdobrasil.org/wp-content/uploads/2021/09/peeled-banana-isolated-white-background-with-clipping-path-477x375.jpg'
    }
     it('Estou na pagina de cadastro de imagem ', ()=>{
    cy.visit('/')
  })  
 it(`Quando eu digito "${imagem.titulo}"no  campo do titulo`,()=>{
    registroForm. typeTitle(imagem.titulo)
  })
  it(`Quando eu digito "${imagem.url}"no  campo do URL`,()=>{
    registroForm.typeUrl(imagem.url)
  })
  it('Eu clico no botao de envio',()=>{
    registroForm.clickSubmit()
  })
})
})