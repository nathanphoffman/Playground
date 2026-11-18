<template>
  <!-- <main> is a landmark, so screen reader users can jump straight to the content. -->
  <main>
    <h1>Log in</h1>
    <!-- Every input has a <label>; that is what makes a form usable with a screen reader. -->
    <form>
      <label for="email">Email</label>
      <input id="email" type="email" />
      <label for="password">Password</label>
      <input id="password" type="password" />
      <button type="submit">Log in</button>
    </form>
  </main>
</template>
