<div class="task-form">
    <button class="btn-expand" type="button" on:click={handleClickExpanded}>새 작업</button>
    {#if isTaskFormOpened}
    <div class="form">
        <input class="inp-title textfield" type="text" value="" on:change={handleTitleChanged}>
        <textarea class="inp-content textfield" value="" on:change={handleContentChanged} />
        <input class="inp-tags textfield" type="text" value="" on:change={handleTagsChanged}>
    </div>
    {/if}
</div>

<script lang="ts">
import type { MouseEventHandler, ChangeEventHandler } from "svelte/elements";

const _ = {
    title: '',
    content: '',
    tags: [] as string[],
};

let isTaskFormOpened = false;

const handleClickExpanded: MouseEventHandler<HTMLElement> = (e) => {
    if (e.target === null) {
        return;
    }
    isTaskFormOpened = !isTaskFormOpened;
}

const handleTitleChanged: ChangeEventHandler<HTMLElement> = (e) => {
    if (e.target === null) {
        return;
    }
    _.title = (e.target as HTMLInputElement).value;
}

const handleContentChanged: ChangeEventHandler<HTMLElement> = (e) => {
    if (e.target === null) {
        return;
    }
    _.content = (e.target as HTMLInputElement).value;
}

const handleTagsChanged: ChangeEventHandler<HTMLElement> = (e) => {
    if (e.target === null) {
        return;
    }
    _.tags = (e.target as HTMLInputElement).value.split(",").map(t => t.trim());
}
</script>

<style lang="scss">
.task-form {
    padding: 0 14px;
}
.btn-expand {
    display: block;
    width: 100%;
    height: 38px;
    border: 1px solid #999;
    border-radius: 2px;
    color: #555;
    cursor: pointer;
}
.form {
    margin-top: 12px;
    padding: 18px;
    border: 1px solid #999;
    border-radius: 2px;
    .textfield {
        display: block;
        width: 100%;
        padding: 12px 14px;
        border: 1px solid #c3c3c3;    
        border-radius: 2px;
        background-color: #fff;
    }
}
</style>