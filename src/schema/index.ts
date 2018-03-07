import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList } from "graphql";
import { ArticleType, ArticleMutation } from "./article.schema";
import { ArticleModel } from "../models/article.model";

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    article: {
      type: ArticleType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve: (pV, args) => {
        return ArticleModel.findById(args.id)
      }
    },

    articles: {
      type: new GraphQLList(ArticleType),
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve: (pV, args) => {
        return ArticleModel.find({})
      }
    }
  }
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: ArticleMutation
})