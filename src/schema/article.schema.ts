import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import { ArticleModel } from '../models/article.model';

export const ArticleType = new GraphQLObjectType({
  name: 'Article',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString, description: 'The name of article' },
    content: { type: GraphQLString }
  })
});

export const ArticleMutation = new GraphQLObjectType({
  name: 'ArticleMutatoin',
  fields: {
    addArticle: {
      type: ArticleType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        content: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (parentValue, args) => {
        return ArticleModel.create(args);
      }
    },

    removeArticle: {
      type: ArticleType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (pV, args) => {
        return ArticleModel.findOneAndRemove(args.id);
      }
    }
  }
});