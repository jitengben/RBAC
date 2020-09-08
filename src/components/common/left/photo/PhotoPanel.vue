<template>
<div id="photo-panel">
  <div>
    <img src="~assets/img/admin1.jpg" id="yhtx" alt="个人头像" />
    <p>
      <span id="online">●</span>
      <span id="yhm1">{{yhm}}</span>
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: "PhotoPanel",
  data() {
    return {
      yhm: "",
    };
  },
  created() {
    let yhm = JSON.parse(sessionStorage.getItem("yhm"));
    this.yhm = yhm;
  },
};
</script>

<style scoped>
#photo-panel {
  height: 110px;
  padding: 10px;
  margin: 0 20px;
  border-bottom: 1px solid gray;
}

#photo-panel div {
  text-align: center;
}

#photo-panel img {
  width: 50%;
  border-radius: 100%;
}

#photo-panel p {
  margin: 5px;
}

#photo-panel #online {
  font-size: 20px;
  color: #5cb85c;
}
</style>
