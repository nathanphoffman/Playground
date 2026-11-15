import "reflect-metadata";
import { Controller, Get, Injectable, Module, Param } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Injectable()
class GreetingService {
  greet(name: string) { return `Hello, ${name}, from a Nest service`; }
}

@Controller("hello")
class HelloController {
  constructor(private readonly greeting: GreetingService) {} // dependency injection

  @Get(":name")
  hello(@Param("name") name: string) { return this.greeting.greet(name); }
}

@Module({ controllers: [HelloController], providers: [GreetingService] })
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log("http://localhost:3000/hello/Nate");
}
void bootstrap();
