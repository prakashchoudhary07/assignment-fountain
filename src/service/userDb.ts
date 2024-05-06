class UserDb {
  private users!: Map<string, any>;
  private static instance: UserDb;

  constructor() {
    if (!UserDb.instance) {
      this.users = new Map();
      UserDb.instance = this;
    }
    return UserDb.instance;
  }

  public static getInstance(): UserDb {
    if (!UserDb.instance) {
      new UserDb();
    }
    return UserDb.instance;
  }

  getUser(key: string): any {
    return this.users.get(key);
  }

  setUser(key: string, data: any): void {
    this.users.set(key, data);
  }

  checkUser(key: string): boolean {
    return this.users.has(key);
  }
}

export default UserDb;
