import { v4 as v4uuid } from 'uuid';

interface INoteProperties {
  userId: string;
  title: string;
  content: string;
  shortContent?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface INoteSerialize {
  id: string;
  userId: string;
  title: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Note {
  private readonly id: string;

  private props: INoteProperties;

  private constructor(props: INoteProperties, id?: string) {
    this.props = props;
    this.id = id ? id : v4uuid();
  }

  get noteId(): string {
    return this.id;
  }

  get userId(): string {
    return this.props.userId;
  }

  get title(): string {
    return this.props.title;
  }

  get content(): string {
    return this.props.content;
  }

  get createdAt(): Date | undefined {
    return this.props.createdAt;
  }

  get updatedAt(): Date | undefined {
    return this.props.updatedAt;
  }

  get shortContent(): string | undefined {
    return this.props.shortContent;
  }

  public serialize(): INoteSerialize {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      title: this.title,
      content: this.content,
      userId: this.userId,
    };
  }

  public static create(props: INoteProperties, id?: string): Note {
    return new Note(props, id);
  }

}