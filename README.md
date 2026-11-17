##Dado de RPG (d20) com Sensores:

Aplicativo mobile feito com React Native + Expo que simula um dado de 20 lados (d20). Não há botão para rolar: o dado é lançado agitando o celular, usando o acelerômetro do aparelho. Quando a agitação para por um instante, o dado para em uma face e mostra o número sorteado.

Projeto desenvolvido para uma atividade da faculdade (FATEC – DSM).

##Como funciona:

Tela inicial: apresenta o app e leva para a tela do dado.
Tela do dado: fica "escutando" o acelerômetro.
Ao detectar agitação, o dado entra em estado rolando: gira e troca de face rapidamente.
Quando o celular fica cerca de 1 segundo sem ser agitado, o app sorteia um número de 1 a 20, o dado para na face correspondente e exibe o resultado.

##Estados da tela do dado:

parado:	Aguardando. Mostra "Agite o celular!"
rolando:	Dado girando e trocando de face. Fundo fica verde.
resultado:	Dado parado na face sorteada. Mostra "Você tirou: N número"

##Detecção de agitação:

O acelerômetro retorna os valores x, y e z em G (a gravidade está incluída, então com o celular parado a leitura fica perto de 1.0 G). O app calcula a magnitude.

Se a magnitude passar de LIMITE_AGITACAO, considera-se que o aparelho está sendo agitado. Cada leitura forte reinicia um temporizador, quando ele completa PAUSA_PARA_SORTEAR sem nova agitação, o resultado é sorteado.

##Tecnologias:

- Expo (SDK 58)
- React Native 0.88
- Expo Router – navegação baseada em arquivos
- expo-sensors – acelerômetro
- React Native Reanimated – animações de giro e "quique"
- TypeScript

##Estrutura do projeto:

├── assets/
│   └── images/
│       └── d20/              # 20 imagens, uma por face (d20_01.png ... d20_20.png)
├── src/
│   ├── app/
│   │   ├── _layout.tsx       # Navegação (Stack)
│   │   ├── index.tsx         # Tela inicial
│   │   └── dado.tsx          # Tela do dado (sensor + animação)
│   ├── constants/
│   │   └── faces.ts          # Mapa número → imagem da face
│   └── styles.js             # Estilos da tela inicial
├── app.json
└── package.json

##Como executar:

-> Pré-requisitos:

Node.js instalado
Um celular físico com o app Expo Go 
Celular e computador na mesma rede Wi-Fi

Passos:
bash
# 1. Instalar as dependências
npm install

# 2. Iniciar o servidor de desenvolvimento
npx expo start

Depois, escaneie o QR Code exibido no terminal com o Expo Go (Android) ou com a câmera (iOS) e agite o celular na tela do dado vendo o dado em ação.
