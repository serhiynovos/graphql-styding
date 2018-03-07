import { Document, Model, model, Schema } from 'mongoose';

export interface IArticle extends Document {
  title: string;
  content: string;
}

export interface IArticleModel extends Model<IArticle> {

}

export const ArcticleModel = model<IArticle, IArticleModel>('Article', new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
}));