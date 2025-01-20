# Sistema de Gestão de Pedidos

## **Como Executar o Projeto**
### **Pré-requisitos**
Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente:
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### **Passo a Passo**
1. **Clone o repositório:**
      ```bash
      git clone https://github.com/limalucas99/Gestao-de-Pedidos---Arquitetura-Hexagonal.git
      cd Gestao-de-Pedidos---Arquitetura-Hexagonal
      ```

2. **Configure as variáveis de ambiente:**
    - Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis:
      ```env
      POSTGRES_USER=seu_usuario
      POSTGRES_PASSWORD=sua_senha
      POSTGRES_DB=seu_banco
      ```
    - Exemplo:
      ```env
      POSTGRES_USER=postgres
      POSTGRES_PASSWORD=Lucas@Fiap
      POSTGRES_DB=order-management
      ```     


3. **Inicie os containers:**
     ```bash
     docker-compose up --build
     ```
   
4. **Acesse a aplicação:**
   - A API estará disponível em: [http://localhost:3000](http://localhost:3000)
   - A documentação Swagger pode ser acessada em: [http://localhost:3000/api/swagger](http://localhost:3000/api/swagger)  
   <br>  

5. **Popule o banco de dados (Opcional):**
    - Com o container em execução:
     ```bash  
     docker exec -it app-order-management npm run db:seed
     ```
---

## **Sobre o Projeto**
Este projeto é um sistema de autoatendimento desenvolvido com o objetivo de substituir todo o processo manual feito em lanchonetes. Os clientes poderão se cadastrar/identificar, realizar os pedidos e pagar sem interação direta com um funcionário, também podendo acompanhar o status do pedido desde o preparo até a finalização. Os funcionários podem gerenciar categorias, produtos e pedidos, de forma que é possível utilizar os dados desses pedidos para eventuais campanhas com os clientes.

O projeto foi desenvolvido utilizando a arquitetura hexagonal, também conhecida como Ports and Adapters. Essa abordagem foi escolhida para garantir um desacoplamento entre o núcleo de regras de negócio e as interfaces externas, como sistemas de pagamento, banco de dados, entre outros serviços. Isso proporciona uma maior flexibilidade e facilidade na integração com novas tecnologias e sistemas, além de permitir uma manutenção mais simples e a evolução do sistema sem impactar diretamente a lógica de negócio.

---

### **DDD e Event Storming**
A modelagem do sistema foi realizada utilizando as práticas de **Domain-Driven Design (DDD)**, incluindo **Event Storming** para mapear os fluxos de eventos e a estrutura do domínio. A documentação visual dessa modelagem foi feita utilizando o **MIRO** e pode ser acessada através do seguinte link:

[Link para os Diagramas de DDD e Event Storming no MIRO](https://miro.com/app/board/uXjVLG23_EE=/)

---

## **Tecnologias Utilizadas**
- **Back-end:** Typescript, Express
- **Banco de Dados:** PostgreSQL, TypeORM
- **Containerização:** Docker e Docker Compose
- **Documentação:** Swagger

---

> Este projeto foi desenvolvido para a Fase 1 da Pós-Tech em Software Architecture da FIAP (Faculdade de Informática e Administração Paulista).


