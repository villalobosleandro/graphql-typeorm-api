import {
  Resolver,
  Mutation,
  Arg,
  Int,
  Query,
  InputType,
  Field
} from "type-graphql";
import { createQueryBuilder } from "typeorm";
import { Recipe } from "../entity/Recipe";

@InputType()
class RecipeInput {
  @Field()
  name!: string;

  @Field()
  description!: string;

  @Field(() => Int)
  categoryId!: number;
}


@Resolver()
export class RecipeResolver {
  
  @Mutation(() => Recipe)
  async createRecipe(
    @Arg("variables", () => RecipeInput) variables: RecipeInput
  ) {
    const newRecipe = Recipe.create(variables);
    return await newRecipe.save();
  }

  @Query(() => [Recipe])
  async recipes() {
    // let query = await createQueryBuilder('recipe')
    //   .leftJoinAndSelect('recipe.categoryId', 'category')
    //   .where('category.id = :id' , {id: 1})
    //   .getOne();

    //   console.log('query ', query);
      
    return await Recipe.find();
  }
}
