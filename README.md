# BlogTenants
**BlogTenants** is a multi-tenant blogging platform that lets anyone create, manage, and grow their own blog — all under one powerful system.


## Tech Stack
- **Next.js**: Frontend + Backend
- **Prisma + NeonDB**: Database + ORM
- **Kinde**: Auth


# STEPS: 
- Install Next.js for Frontend
- Install Express.js for Backend
- Font geistMono
- Kinde for Auth 
  - https://blogtenants.kinde.com/admin
  - Kinde in nextjs and expressjs
  - https://docs.kinde.com/
  - https://blogtenants.kinde.com/admin/cx/_:nav&m:design::_:submenu&s:branding

- Design Header and footer with sidebar

- Set Auth using Kind

- Create dashboard Frontend (/dahsboard)
![alt text](image.png)

- Create new Site Frotend (/dahsboard/sites/new)
![alt text](image-1.png)

![alt text](image-2.png)

- Database Design Prisma + NeonDB 
  - User {
    id,
    email,
    firstname,
    lastname,
    profileImage,
    createdAt,
    updatedAt
  }