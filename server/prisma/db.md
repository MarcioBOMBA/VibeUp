# Database Logic

## Define Tabs

### User

- id
- idName
- email
- password
- phone
- timezone
- type
- verified
- createdAt
- updatedAt

#### explaining
- id: identifica usuário (unique)
- idName: primeiro nome registrado do usuário, utilizado na busca e identificaão do mesmo(unique)
- email: user email (unique)
- password: user senha criptografada
- phone: user telefone (optional)
- timezone: timezone para converter tempo para usuario, é enviado pelo front
- type: especifica se o usuário é admin ou padrão
- verified: se o usuário concluiu verificação
- createdAt: Criado em
- updatedAt: atualizado em

### Perfil

- userId
- name
- description
- profile_url
- banner_url
- birth_date
- private

#### explaining

(relation: Perfil 1 - 1 User)

- userId: identifica o usuário o qual possui este perfil (unique)
- name: quando o usuário quiser trocar seu nome, irá alterar aqui
- description: descriçãodo usuário
- profile_url: imagem de perfil
- banner_url: banner do usuário
- birth_date: data de nascimento do usuário
- private: se o perfil é privado ou não

### Follow

- followerId
- followedId

#### explanation

(relation: User N - N User)

- followerId: usuario que segue
- followedId: usuario seguido

### Notification

- id
- userId
- vibeId
- title
- content
- read
- createdAt
- userFromId

#### explaining

(relation: Notification N - 1 User)
(relation: Notification N - 1 Vibe)
(relation: Notification N - 1 User the notification come from)

- id: identifica a notificação (unique)
- userId: remetente
- vibeId: caso tenha relação com um vibe
- title: o título da notificação
- content: conteudo opcional
- read: casoo usuário ja tenha lido
- createdAt: criado em
- userFromId: o usuário o qual a notificação está relacionada

### Vibe

- id
- userId
- parentId
- content
- media_url
- read
- likes
- comments

#### explaining

(relation: Vibe N - 1 User)
(relation: Vibe N - 1 Vibe)

- id: identificador
- userId: usuario criador
- parentId: caso seja uma resposta, terá o id do Vibe pai
- content: conteudo do vibe
- media_url: pode ser imagem, gif e video
- read: quantidade de visualizações
- likes: quantidade de likes
- comments: quantidade de comentarios

### Like

- vibeId
- userId

#### explaining

(relation: User N - N - Vibe)

- vibeId: identificador do vibe
- userId: identificador do usuario

### Tag

- id
- name
- posts

#### explanation

(relation: Tag N - N Vibe)

- id: indentificador
- name: nome da tag
- posts: número de posts que possuem a tag

### ReVibe

- vibeId
- userId

#### explanation

(relation: Vibe N - N User)

- vibeId: indentificador do vibe
- userId: identificador do usuario