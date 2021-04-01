export class Project {
  constructor(
    public title: string,
    public id: string,
    public description: string,
    public files?: string[],
    public comments?: string[]
  ){}

}
