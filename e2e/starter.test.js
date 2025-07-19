describe('Login Flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should login successfully', async () => {
    await element(by.id('email')).typeText('test@example.com');
    await element(by.id('password')).typeText('123456');
    await element(by.id('login')).tap();
    await expect(element(by.id('homeScreen'))).toBeVisible();
  });
});
