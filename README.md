# XandEngine
Uma Engine simples para jogos utilizando javascript

## ENTIDADES:

- Entidade.posX
- Entidade.posY
- Entidade.velocityX
- Entidade.velocityY
- Entidade.followMouse

### GameObject extends Entities
GameObject.sprite
GameObject.width
GameObject.height

### Rect extends Entities
Rect.color
Rect.width
Rect.height

### Circle extends Entities
Circle.color
Circle.radius

### Text extends Entities
Text.color
Text.text

## COLISÃO
Para as colisões se faz necessário implementar collision(AABB) e collider() para cada Classe que irá herdar de Entidades,
assim como segue os exemplos de Rect, GameObject e Circle.

## Criação do mundo:

- No arquivo Main.js deve iniciar o mundo.
- Você deve instanciar as classes que deseja colocar no mundo, modificar parâmeros, colocar textura, das instancias.
- Então adicionar as Entidades no mundo. 
- World.addObject(entidade)
- Por fin iniciar o mundo: gameWorld.init()
- Esses passos são feitos no arquivo Main.js

