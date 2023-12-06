import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutoModule } from './produto/produto.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ProdutoModule, TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    port: 5432,
    database:'mercado',
    username:'postgres',
    password:'5873',
    entities:[__dirname + '/**/*.entity{.js,.ts}'],
    synchronize:true,
  })],
})
export class AppModule {}
