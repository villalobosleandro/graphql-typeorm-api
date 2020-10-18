import {
  Resolver,
  Mutation,
  Arg,
  Int,
  Query,
  InputType,
  Field
} from "type-graphql";
import { Category } from "../entity/Category";

@InputType()
class CategoryInput {
  @Field()
  name!: string;
}

@InputType()
class CategoryUpdateInput {
  @Field(() => String, {nullable: true})
  name?: string;
}

@Resolver()
export class CategoryResolver {
  @Mutation(() => Category)
  async createCategory(
    @Arg("variables", () => CategoryInput) variables: CategoryInput
  ) {
    const newCategory = Category.create(variables);
    return await newCategory.save();
  }

  @Mutation(() => Boolean)
  async deleteCategory(@Arg("id", () => Int) id: number) {
    await Category.delete(id);
    return true;
  }

  @Mutation(() => Boolean)
  async updateCategory(
    @Arg("id", () => Int) id: number,
    @Arg("fields", () => CategoryUpdateInput) fields: CategoryUpdateInput
  ) {
    await Category.update({ id }, fields);
    return true;
  }

  @Query(() => [Category])
  async categories() {
    return await Category.find();
  }
}
