export class AppError {
  constructor(public originalError?: any) {
    if(originalError.status === 404) {
      console.log('404404404404404404404');
    } else if(originalError.status === 400) {
      console.log('400 ERROR');
    }
  }
}
