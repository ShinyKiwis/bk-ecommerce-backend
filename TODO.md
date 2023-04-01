Setup ENV 
- [] RDS endpoint
- [] database username
- [] database password
- [X] database port: 5432
Authentication:
- [] normal authentication
- [] JWT (advanced)
Setup controllers:
- [] categories
  - [] electronics ???
- [] products
  - [] by ID
  - [] by categories
  - [] by price range
- [] users
- [] orders 
  - Schema:
    - user_id
    - time_purchased
    - list_of_products by ID (Plan A)
      - {ID - quantity}
    - list_of_products containing objects (Plan B)
Singleton Database Connection (Bad practice):

Payment Method 
- [] integration API
