<script lang="ts">
    let {
        label = "Search",
        city = $bindable(),
        onsubmit = () => {},
        class: class_ = "",
    } = $props();
</script>

<!-- From Uiverse.io by liyaxu123 --> 
<form class="form-control {class_}" onsubmit={(e: SubmitEvent) => {e.preventDefault(); onsubmit();}}>
    <input type="value" required name="city" bind:value={city} placeholder=" " />
    <label for="city">
        {#each label.split("") as letter, i}
            <span style="transition-delay:{50*i}ms">{letter}</span>
        {/each}
    </label>
</form>

<style>
    /* From Uiverse.io by liyaxu123 */ 
.form-control {
  position: relative;
  margin-bottom: 1rem;
}

.form-control input {
  background-color: transparent;
  border: 0;
  border-bottom: 2px #fff solid;
  display: block;
  width: 100%;
  padding: 15px 0;
  font-size: 18px;
  color: #fff;
}

.form-control input:focus,
.form-control input:valid {
  outline: 0;
  border-bottom-color: lightblue;
}

.form-control label {
  position: absolute;
  top: 15px;
  left: 0;
  pointer-events: none;
}

.form-control label span {
  display: inline-block;
  font-size: 18px;
  min-width: 5px;
  color: #fff;
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.form-control input:focus+label span,
.form-control input:valid+label span {
  color: lightblue;
  transform: translateY(-30px);
}
</style>