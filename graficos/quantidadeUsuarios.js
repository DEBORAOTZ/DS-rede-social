async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeomrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)

const data = 
  {
    x: 'nomeDasRedes',
    y: quantidadeDeUsuarios,
    type: 'bar',
    marker: {
      color: getComputedStyle(document.body).getPropertyValue('--primary-color')
    }
  }

  }

  quantidadeUsuarios()