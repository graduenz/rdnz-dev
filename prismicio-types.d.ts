// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for Article documents */
interface ArticleDocumentData {
  /**
   * Title field in *Article*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismicT.KeyTextField;
  /**
   * Featured Image field in *Article*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: article.featured_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  featured_image: prismicT.ImageField<never>;
  /**
   * Subtitle field in *Article*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article.subtitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  subtitle: prismicT.KeyTextField;
  /**
   * Category field in *Article*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article.category
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  category: prismicT.KeyTextField;
  /**
   * Publish Date field in *Article*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: article.publish_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/date
   *
   */
  publish_date: prismicT.DateField;
  /**
   * Lab field in *Article*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: article.lab
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  lab: prismicT.RelationField<"lab">;
  /**
   * Slice Zone field in *Article*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: article.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<ArticleDocumentDataSlicesSlice>;
}
/**
 * Slice for *Article → Slice Zone*
 *
 */
type ArticleDocumentDataSlicesSlice =
  | TextSlice
  | QuoteSlice
  | ImageSlice
  | CodeSlice;
/**
 * Article document from Prismic
 *
 * - **API ID**: `article`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArticleDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<
    Simplify<ArticleDocumentData>,
    "article",
    Lang
  >;
/** Content for Lab documents */
interface LabDocumentData {
  /**
   * Name field in *Lab*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: lab.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  name: prismicT.KeyTextField;
  /**
   * Description field in *Lab*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: lab.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismicT.RichTextField;
  /**
   * Repository URL field in *Lab*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: lab.repository_url
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  repository_url: prismicT.KeyTextField;
  /**
   * Date field in *Lab*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: lab.date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/date
   *
   */
  date: prismicT.DateField;
}
/**
 * Lab document from Prismic
 *
 * - **API ID**: `lab`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LabDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithoutUID<Simplify<LabDocumentData>, "lab", Lang>;
/** Content for Section documents */
interface SectionDocumentData {
  /**
   * Name field in *Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  name: prismicT.KeyTextField;
  /**
   * Slice Zone field in *Section*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: section.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<SectionDocumentDataSlicesSlice>;
}
/**
 * Slice for *Section → Slice Zone*
 *
 */
type SectionDocumentDataSlicesSlice =
  | EducationSlice
  | WorkExperienceSlice
  | TextSlice;
/**
 * Section document from Prismic
 *
 * - **API ID**: `section`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SectionDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithoutUID<
    Simplify<SectionDocumentData>,
    "section",
    Lang
  >;
/** Content for Settings documents */
interface SettingsDocumentData {
  /**
   * Social field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.social[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  social: prismicT.GroupField<Simplify<SettingsDocumentDataSocialItem>>;
  /**
   * WhatsApp field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.whatsapp
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  whatsapp: prismicT.KeyTextField;
  /**
   * Email field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.email
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  email: prismicT.KeyTextField;
}
/**
 * Item in Settings → Social
 *
 */
export interface SettingsDocumentDataSocialItem {
  /**
   * Name field in *Settings → Social*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.social[].name
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  name: prismicT.KeyTextField;
  /**
   * Icon field in *Settings → Social*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.social[].icon
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  icon: prismicT.KeyTextField;
  /**
   * Url field in *Settings → Social*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.social[].url
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  url: prismicT.KeyTextField;
}
/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;
export type AllDocumentTypes =
  | ArticleDocument
  | LabDocument
  | SectionDocument
  | SettingsDocument;
/**
 * Primary content in Code → Primary
 *
 */
interface CodeSliceDefaultPrimary {
  /**
   * Code field in *Code → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: code.primary.code
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  code: prismicT.RichTextField;
  /**
   * Language field in *Code → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: code.primary.language
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  language: prismicT.KeyTextField;
}
/**
 * Default variation for Code Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CodeSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<CodeSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Code*
 *
 */
type CodeSliceVariation = CodeSliceDefault;
/**
 * Code Shared Slice
 *
 * - **API ID**: `code`
 * - **Description**: `Code`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CodeSlice = prismicT.SharedSlice<"code", CodeSliceVariation>;
/**
 * Primary content in Education → Primary
 *
 */
interface EducationSliceDefaultPrimary {
  /**
   * Name field in *Education → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: education.primary.name
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  name: prismicT.KeyTextField;
  /**
   * Degree field in *Education → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: education.primary.degree
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  degree: prismicT.KeyTextField;
  /**
   * School field in *Education → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: education.primary.school
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  school: prismicT.KeyTextField;
  /**
   * Image field in *Education → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: education.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismicT.ImageField<never>;
  /**
   * Since field in *Education → Primary*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: education.primary.since
   * - **Documentation**: https://prismic.io/docs/core-concepts/date
   *
   */
  since: prismicT.DateField;
}
/**
 * Default variation for Education Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type EducationSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<EducationSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Education*
 *
 */
type EducationSliceVariation = EducationSliceDefault;
/**
 * Education Shared Slice
 *
 * - **API ID**: `education`
 * - **Description**: `Education`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type EducationSlice = prismicT.SharedSlice<
  "education",
  EducationSliceVariation
>;
/**
 * Primary content in Image → Primary
 *
 */
interface ImageSliceDefaultPrimary {
  /**
   * Image field in *Image → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismicT.ImageField<never>;
  /**
   * Caption field in *Image → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image.primary.caption
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  caption: prismicT.KeyTextField;
}
/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<ImageSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Image*
 *
 */
type ImageSliceVariation = ImageSliceDefault;
/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSlice = prismicT.SharedSlice<"image", ImageSliceVariation>;
/**
 * Primary content in Quote → Primary
 *
 */
interface QuoteSliceDefaultPrimary {
  /**
   * Source field in *Quote → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: quote.primary.source
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  source: prismicT.KeyTextField;
  /**
   * Text field in *Quote → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: quote.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  text: prismicT.KeyTextField;
}
/**
 * Default variation for Quote Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type QuoteSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<QuoteSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Quote*
 *
 */
type QuoteSliceVariation = QuoteSliceDefault;
/**
 * Quote Shared Slice
 *
 * - **API ID**: `quote`
 * - **Description**: `Quote`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type QuoteSlice = prismicT.SharedSlice<"quote", QuoteSliceVariation>;
/**
 * Primary content in Text → Primary
 *
 */
interface TextSliceDefaultPrimary {
  /**
   * Text field in *Text → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismicT.RichTextField;
}
/**
 * Default variation for Text Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<TextSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Text*
 *
 */
type TextSliceVariation = TextSliceDefault;
/**
 * Text Shared Slice
 *
 * - **API ID**: `text`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSlice = prismicT.SharedSlice<"text", TextSliceVariation>;
/**
 * Primary content in WorkExperience → Primary
 *
 */
interface WorkExperienceSliceDefaultPrimary {
  /**
   * Role field in *WorkExperience → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work_experience.primary.role
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  role: prismicT.KeyTextField;
  /**
   * Company field in *WorkExperience → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work_experience.primary.company
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  company: prismicT.KeyTextField;
  /**
   * Image field in *WorkExperience → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: work_experience.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismicT.ImageField<never>;
  /**
   * Since field in *WorkExperience → Primary*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: work_experience.primary.since
   * - **Documentation**: https://prismic.io/docs/core-concepts/date
   *
   */
  since: prismicT.DateField;
  /**
   * Until field in *WorkExperience → Primary*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: work_experience.primary.until
   * - **Documentation**: https://prismic.io/docs/core-concepts/date
   *
   */
  until: prismicT.DateField;
  /**
   * Location field in *WorkExperience → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work_experience.primary.location
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  location: prismicT.KeyTextField;
}
/**
 * Default variation for WorkExperience Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type WorkExperienceSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<WorkExperienceSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *WorkExperience*
 *
 */
type WorkExperienceSliceVariation = WorkExperienceSliceDefault;
/**
 * WorkExperience Shared Slice
 *
 * - **API ID**: `work_experience`
 * - **Description**: `WorkExperience`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type WorkExperienceSlice = prismicT.SharedSlice<
  "work_experience",
  WorkExperienceSliceVariation
>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      ArticleDocumentData,
      ArticleDocumentDataSlicesSlice,
      ArticleDocument,
      LabDocumentData,
      LabDocument,
      SectionDocumentData,
      SectionDocumentDataSlicesSlice,
      SectionDocument,
      SettingsDocumentData,
      SettingsDocumentDataSocialItem,
      SettingsDocument,
      AllDocumentTypes,
      CodeSliceDefaultPrimary,
      CodeSliceDefault,
      CodeSliceVariation,
      CodeSlice,
      EducationSliceDefaultPrimary,
      EducationSliceDefault,
      EducationSliceVariation,
      EducationSlice,
      ImageSliceDefaultPrimary,
      ImageSliceDefault,
      ImageSliceVariation,
      ImageSlice,
      QuoteSliceDefaultPrimary,
      QuoteSliceDefault,
      QuoteSliceVariation,
      QuoteSlice,
      TextSliceDefaultPrimary,
      TextSliceDefault,
      TextSliceVariation,
      TextSlice,
      WorkExperienceSliceDefaultPrimary,
      WorkExperienceSliceDefault,
      WorkExperienceSliceVariation,
      WorkExperienceSlice,
    };
  }
}
