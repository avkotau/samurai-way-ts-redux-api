export const required = (value: string) => (value ? undefined : 'Required')
export const maxLength = (max: number) => (value: string) => {
    return value && value.length > max ? `Max length symbols ${max}` : undefined
}
export const minLength = (min: number) => (value: string) => {
    return value && value.length < min ? `Min length symbols ${min}` : undefined
}
export const composeValidators = (...validators: any[]) => (value: any) =>
    validators.reduce((error, validator) => error || validator(value), undefined);
