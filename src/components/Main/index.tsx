import * as S from './styles'

const Main = () => (
  <S.Wraper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de u átomo com react avançado escrito ao lado"
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      Typescript, ReactJS, NextJS e Styled Components
    </S.Description>
    <S.Ilustration
      src="img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código"
    />
  </S.Wraper>
)

export default Main
